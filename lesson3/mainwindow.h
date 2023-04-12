#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTranslator>
#include <QEvent>
#include <QShortcut>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();
protected:
    void changeEvent(QEvent * event) override;
  // void keyPressEvent(QKeyEvent *event) override;

private slots:
    void on_pushButton_info_clicked();
    void on_pushButton_open_clicked();
    void on_pushButton_save_clicked();

    void on_comboBox_currentIndexChanged(int index);

    void slotShortcutCtrlO();
    void slotShortcutCtrlN();
    void slotShortcutCtrlS();
    void slotShortcutCtrlQ();

    void on_pushButton_clicked();

private:
    Ui::MainWindow *ui;
    QTranslator translator;
    QShortcut *keyCtrlO;
    QShortcut *keyCtrlS;
    QShortcut *keyCtrlN;
    QShortcut *keyCtrlQ;


};
#endif // MAINWINDOW_H
