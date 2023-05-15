#include "dataorg.h"
#include <QFile>
#include <QTextStream>
#include <QDate>
#include <QDebug>
#include <QSqlQuery>

DataOrg::DataOrg(QObject *parent)
    : QObject{parent}
{
    dataOrgDb = QSqlDatabase::addDatabase("QSQLITE");
    dataOrgDb.setDatabaseName("dataorg.db");
    createDbConnection();
    if (!dataOrgDb.tables().contains("dataOrgMain"))
        createTable();
    QSqlQuery query;
    QString strQuery = "SELECT taskName, deadLine, progress FROM dataOrgMain";
    query.exec(strQuery);
    while(query.next())
    {
        taskName.push_back(query.value("taskName").toString());
        deadLine.push_back(query.value("deadLine").toString());
        progress.push_back(query.value("progress").toString());
    }
}

bool DataOrg::createDbConnection()
{
    if(!dataOrgDb.open())
    {
        qDebug()<< "Unable to connect";
        return false;
    }
        return true;
}
void DataOrg::createTable()
{
    QSqlQuery query;
    QString strQuery = "CREATE TABLE dataOrgMain ("
                       "id INTEGER PRIMARY KEY NOT NULL,"
                       "taskName VARCHAR(15),"
                       "deadLine VARCHAR(11),"
                       "progress INTEGER);";
    if (!query.exec(strQuery))
    {
        qDebug() << "Unable create a table";
    }
}


bool DataOrg::insertDataToTable(QString newTaskName, QString newDeadLine, QString newProgress)
{
    QSqlQuery query;
    QString strQuery = "INSERT INTO dataOrgMain (taskName, deadLine, progress) VALUES('" + newTaskName + "', '" + newDeadLine + "', '" + newProgress + "');";
    if (!query.exec(strQuery))
    {
        qDebug() << "error add row";
        return true;
    }
        return false;
}

QDate DataOrg::getSL()
{
    return someLine;
}
void DataOrg::closeDataOrg()
{
    dataOrgDb.close();
}

bool DataOrg::addTask(QString newTaskName, QString newDeadLine, QString newProgress)
{
    int newProgressInt = newProgress.toInt();
    if (newProgressInt < 0 || newProgressInt > 10 || QString::number(newProgressInt) != newProgress)
        return false;
    QDate newDeadLineDate = QDate::fromString(newDeadLine, "dd.MM.yyyy");
    if (newDeadLineDate.toString("dd.MM.yyyy") != newDeadLine)
        return false;
    if (newTaskName == "")
        return false;
    if (insertDataToTable(newTaskName, newDeadLine, newProgress))
    {
        deadLine.push_back(newDeadLine);
        taskName.push_back(newTaskName);
        progress.push_back(newProgress);
    }
    return true;
}

uint DataOrg::getCount()
{
    return taskName.length();
}

QVector<QString> DataOrg::getDeadLine()
{
    return deadLine;
}

QVector<QString> DataOrg::getTaskName()
{
    return taskName;
}

QVector<QString> DataOrg::getProgress()
{
    return progress;
}
