#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QLineEdit>
#include <QMainWindow>
#include <QProgressBar>
#include <QPushButton>
#include "downloader.h"

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Downloader* downloader;
    QProgressBar *ppb;
    QLineEdit *txt;
    QPushButton *button;

    void showPic(const QString&);

private slots:
    void slotGo();
    void slotError();
    void slotDowloadProgress(int, int);
    void slotDone(const QUrl&, const QByteArray&);

};
#endif // MAINWINDOW_H
