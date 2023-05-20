#ifndef FILECONTROLLER_H
#define FILECONTROLLER_H

#include <QObject>
#include <QFile>
#include <QSqlDatabase>

class FileController : public QObject
{
    Q_OBJECT
public:
    explicit FileController(QObject *parent = nullptr);
    virtual ~FileController();
    Q_INVOKABLE
    void getNextTask();
    Q_INVOKABLE
    void saveData(QString taskName, QString deadline, int progress);
    void writeDataVec(QString taskName, QString deadline, int progress);
    void loadData();

signals:
    void initEnd(int count);
    void loadTask(QString taskName, QString deadline, int progress);

private:
    QFile* file_;
    QVector<QString> taskNames_;
    QVector<QString> deadlines_;
    QVector<int> progresses_;
    //11
    QSqlDatabase db;
    bool createConnection();
    bool createTable();
    bool insertRecord(QString taskName, QString deadline = "", int progress = 0);
    void printTable();
};
#endif // FILECONTROLLER_H
