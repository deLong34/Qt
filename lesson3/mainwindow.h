#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTranslator>
#include <QEvent>
#include <QShortcut>
#include <QMdiArea>

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
    void onPushButtonInfoClicked();
    void onPushButtonOpenClicked();
    void onPushButtonSaveClicked();

    //void on_comboBox_currentIndexChanged(int index);
//----5----//
    //void on_comboBox_style_currentIndexChanged(int index);
    void slotShortcutCtrlO();
    void slotShortcutCtrlN();
    void slotShortcutCtrlS();
    void slotShortcutCtrlQ();
    //void on_pushButton_clicked();
    void onPushButtonPrintClicked();
//----6----//
    void setRusLang();
    void setEngLang();
    void setLightThemeSlot();
    void setDarkThemeSlot();

private:
    Ui::MainWindow *ui;
    QTranslator translator;
    QShortcut *keyCtrlO;
    QShortcut *keyCtrlS;
    QShortcut *keyCtrlN;
    QShortcut *keyCtrlQ;
    QMdiArea *mdiArea;


};
#endif // MAINWINDOW_H
