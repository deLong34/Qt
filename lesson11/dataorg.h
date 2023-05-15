#ifndef DATAORG_H
#define DATAORG_H

#include <QObject>
#include <QVector>
#include <QDate>
#include <QSqlDatabase>

class DataOrg : public QObject
{
    Q_OBJECT
public:
    explicit DataOrg(QObject *parent = nullptr);

    Q_INVOKABLE bool addTask(QString _taskName, QString _deadLine, QString _progress);
    Q_INVOKABLE void closeDataOrg();
    Q_INVOKABLE uint getCount();
    Q_INVOKABLE QVector<QString> getDeadLine();
    Q_INVOKABLE QVector<QString> getTaskName();
    Q_INVOKABLE QVector<QString> getProgress();
    bool createDbConnection();
    bool insertDataToTable(QString newTaskName, QString newDeadLine, QString newProgress);
    void createTable();

    Q_INVOKABLE QDate getSL();
signals:

private:
    QVector<QString> deadLine;
    QVector<QString> taskName;
    QVector<QString> progress;
    //const QString saveFileName = "Data.txt";
    const QString spliter = "|";
    QDate someLine;
    QSqlDatabase dataOrgDb;
};

#endif // DATAORG_H
