#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_pushButton_info_clicked();

    void on_pushButton_open_clicked();

    void on_pushButton_save_clicked();

    void on_pushButton_get_clicked();

    QStringList getData(const QString &html);

    QString WethergetData(const QString &html);

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
