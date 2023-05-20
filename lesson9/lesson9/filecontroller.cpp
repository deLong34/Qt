#include "filecontroller.h"
#include <QDebug>
#include <QSqlQuery>
#include <QSqlRecord>

FileController::FileController(QObject *parent)
    : QObject{parent}
{
    connect(this, &FileController::loadTask, this, &FileController::writeDataVec);
    file_ = new QFile("tasks_data.txt", this);
    loadData();
}

FileController::~FileController()
{
    if (file_)
        file_->close();
}

void FileController::getNextTask()
{
    if (!file_->isOpen())
    {
        file_->open(QIODevice::ReadWrite | QIODevice::Append);
    }

    if (file_->atEnd())
    {
        file_->close();
        return;
    }

    QDataStream strm(file_);
    qsizetype len = 0;
    strm.readRawData((char*)&len, sizeof len);

    QByteArray data;
    data.resize(len);

    strm.readRawData(data.data(), len);
    QString taskName = QString::fromUtf8(data);

    strm.readRawData((char*)&len, sizeof len);
    data.resize(len);
    strm.readRawData(data.data(), len);
    QString deadline = QString::fromUtf8(data);

    int progress;
    strm.readRawData((char*)&progress, sizeof progress);

    emit loadTask(taskName, deadline, progress);
}

void FileController::saveData(QString taskName, QString deadline, int progress)
{
    if (!file_->isOpen())
        file_->open(QIODevice::ReadWrite | QIODevice::Append);

    if (file_)
    {
        QDataStream strm(file_);

        QByteArray bytes = taskName.toUtf8();
        qsizetype len = bytes.length();
        strm.writeRawData((char*)&len, sizeof len);
        strm.writeRawData(bytes.data(), len);

        bytes = deadline.toUtf8();
        len = bytes.length();
        strm.writeRawData((char*)&len, sizeof len);
        strm.writeRawData(bytes.data(), len);

        strm.writeRawData((char*)&progress, sizeof progress);
    }
}

void FileController::writeDataVec(QString taskName, QString deadline, int progress)
{
    if (taskNames_.contains(taskName))
    {
        return;
    }
    taskNames_.append(taskName);
    deadlines_.append(deadline);
    progresses_.append(progress);
}

void FileController::loadData()
{
    if (file_->open(QIODevice::ReadWrite))
    {
        while (file_->isOpen())
        {
            getNextTask();
        }
    }
    emit initEnd(taskNames_.count());
}

//-----11-----//
bool FileController::createConnection()
{
    db = QSqlDatabase::addDatabase("QSQLITE");
    db.setDatabaseName("filecontroller.db");
    if (!db.open()){
        qDebug() << "Cannot open DB";
        return false;
    }
    return true;
}

bool FileController::createTable()
{
    QSqlQuery query;
    QString s = "CREATE TABLE filecontroller ("
                "id INTEGER PRIMARY KEY NOT NULL,"
                "taskNeme VARCHAR(15),"
                "deadline VARCHAR(11),"
                "progress INTEGER );";
    if (!query.exec(s)) {
        qDebug() << "Unable to create table";
        return false;
    }
    return true;
}

bool FileController::insertRecord(QString taskName, QString deadline, int progress)
{
    QSqlQuery query;
    QString s = "INSERT INTO filecontroller (taskNeme, deadline, progress) "
            "VALUES('%1', '%2', '%3');";
    QString q = s.arg(taskName).arg(deadline).arg(progress);
    if (!query.exec(q)) {
        qDebug() << "Unable to make operation";
        return false;
    }
    return true;
}

void FileController::printTable()
{
    QSqlQuery query;
    if(!query.exec("SELECT * FROM filecontroller;")){
       qDebug() << "Unable to read table";
    }
    QSqlRecord rec = query.record();
    while (query.next()){
        //
    }
}
