#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>
#include <QDir>
#include <QFileDialog>
#include <QTranslator>
#include <QKeyEvent>
#include <QMenuBar>
#include <QAction>
#include <QPrinter>
#include <QPrintDialog>
#include <QWidget>
#include <QTextEdit>
#include <QMdiSubWindow>
#include <QToolBar>
#include <QFontDialog>
#include <QClipboard>
#include "mywidget.h"


MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    //ui->label->setText(tr("Text Editor"));
    //ui->label_2->setText(tr("Language"));
    //ui->pushButton_open->setText(tr("Open"));
    //ui->pushButton_save->setText(tr("Save"));
    //ui->pushButton_info->setText(tr("Info"));
    //ui->radioButton->setText(tr("Read only"));
    //ui->comboBox->addItems(QStringList() << "Русский" << "English");
    // connect(ui->comboBox, &QComboBox::currentIndexChanged, this, &MainWindow::on_comboBox_currentIndexChanged);
    //----5----//
    //ui->comboBox_style->addItems(QStringList() << tr("lite") << tr("dark"));
    //connect(ui->comboBox_style, &QComboBox::currentIndexChanged, this, &MainWindow::on_comboBox_style_currentIndexChanged);

    //3 HotKeys
    keyCtrlO = new QShortcut(this); //инициализация
    keyCtrlO->setKey(Qt::CTRL + Qt::Key_O); //установка кода клавиш
    connect(keyCtrlO, SIGNAL(activated()), this, SLOT(slotShortcutCtrlO()));
    keyCtrlS = new QShortcut(this); //инициализация
    keyCtrlS->setKey(Qt::CTRL + Qt::Key_S); //установка кода клавиш
    connect(keyCtrlS, SIGNAL(activated()), this, SLOT(slotShortcutCtrlS()));
    keyCtrlN = new QShortcut(this); //инициализация
    keyCtrlN->setKey(Qt::CTRL + Qt::Key_N); //установка кода клавиш
    connect(keyCtrlN, SIGNAL(activated()), this, SLOT(slotShortcutCtrlN()));
    keyCtrlQ = new QShortcut(this); //инициализация
    keyCtrlQ->setKey(Qt::CTRL + Qt::Key_Q); //установка кода клавиш
    connect(keyCtrlQ, SIGNAL(activated()), this, SLOT(slotShortcutCtrlQ()));
//-----5-------//
    //QWidget* mywgt = new myWidget(this);
    // mywgt->move(0,150);
//-----6-----//
   QMenu* fileMenu = menuBar()->addMenu("Файл");
//перенесем функционал с кнопок в меню
   QAction* pAboutProg = fileMenu->addAction("О программе");
   QAction* pAbout = fileMenu->addAction("О Qt");
   connect(pAbout, SIGNAL(triggered()), qApp, SLOT(aboutQt()));
   connect(pAboutProg, SIGNAL(triggered()), this, SLOT(onPushButtonInfoClicked()));
   fileMenu->addSeparator();
   QAction* pOpenAction = fileMenu->addAction("Открыть");
   pOpenAction->setIcon(QPixmap(":/icon/Icons/open.png"));
  // connect(pOpenAction, SIGNAL(triggered()), this, SLOT(on_pushButton_open_clicked()));
   QAction* pReadOnlyAction = fileMenu->addAction("Только для чтения");
   pReadOnlyAction->setCheckable(true);
   pReadOnlyAction->setChecked(false);
   QAction* pSaveAction = fileMenu->addAction("Сохранить");
   connect(pSaveAction, SIGNAL(triggered()), this, SLOT(onPushButtonSaveClicked()));
   pSaveAction->setIcon(QPixmap(":/icon/Icons/save.png"));
   QAction* pPrintAction = fileMenu->addAction("Напечатать");
   pPrintAction->setIcon(QPixmap(":/icon/Icons/print.png"));
   connect(pPrintAction, SIGNAL(triggered()), this, SLOT(onPushButtonPrintClicked()));
   fileMenu->addSeparator();
   fileMenu->addAction("Выход", qApp, SLOT(quit()));
//перенесем функционал с боксов в меню
   QMenu* propMenu = menuBar()->addMenu("Настройки");
//язык
   QMenu* subMenuLang = new QMenu("Язык");
   QAction* setRusLang = subMenuLang->addAction("Русский");
   QAction* setEngLang = subMenuLang->addAction("English");
   propMenu->addMenu(subMenuLang);
   connect(setRusLang, SIGNAL(triggered()), this, SLOT(setRusLang()));
   connect(setEngLang, SIGNAL(triggered()), this, SLOT(setEngLang()));
//тема
   QMenu* subMenuTheme = new QMenu("Тема");
   QAction* setLightTheme = subMenuTheme->addAction("Светлая");
   QAction* setDarkTheme = subMenuTheme->addAction("Тёмная");
   propMenu->addMenu(subMenuTheme);
   connect(setRusLang, SIGNAL(triggered()), this, SLOT(setRusLang()));
   connect(setEngLang, SIGNAL(triggered()), this, SLOT(setEngLang()));
//6.3*
   mdiArea = new QMdiArea(this);
   QWidget *wgt = new QWidget(this);
   setCentralWidget(wgt);
   QGridLayout *layout = new QGridLayout(this);
   wgt->setLayout(layout);
   QPushButton* printButton = new QPushButton("Напечатать", this);
   layout->addWidget(printButton, 0,0,1,1);
   layout->addWidget(mdiArea, 1, 0, 10, 1);
   mdiArea->addSubWindow(new QTextEdit(this));
//   mdiArea->addSubWindow(new QTextEdit(this));
   connect(printButton, SIGNAL(clicked()), this, SLOT(onPushButtonPrintClicked()));
   connect(pOpenAction, SIGNAL(triggered()), this, SLOT(onPushButtonOpenClicked()));
//-----7.1-----//
   QToolBar* toolBar = addToolBar("ToolBar");
   QAction* fontAction = toolBar->addAction("Шрифт");
   fontAction->setIcon(QPixmap(":/icon/Icons/font.png"));
   connect(fontAction, SIGNAL(triggered()), this, SLOT(setFont()));
   QAction* leftAlig = toolBar->addAction("Выровнять влево");
   leftAlig->setIcon(QPixmap(":/icon/Icons/left.png"));
   connect(leftAlig, SIGNAL(triggered()), this, SLOT(setLeftAlig()));
   QAction* rightAlig = toolBar->addAction("Выровнять вправо");
   rightAlig->setIcon(QPixmap(":/icon/Icons/right.png"));
   connect(rightAlig, SIGNAL(triggered()), this, SLOT(setRightAlig()));
   QAction* centerAlig = toolBar->addAction("Выровнять по центру");
   centerAlig->setIcon(QPixmap(":/icon/Icons/center.png"));
   connect(centerAlig, SIGNAL(triggered()), this, SLOT(setCenterAlig()));
//копируем формат
   QAction* getFormat = toolBar->addAction("getF");
   getFormat->setIcon(QPixmap(":/icon/Icons/copy.png"));
   connect(getFormat, SIGNAL(triggered()), this, SLOT(getFormat()));
   QAction* pasteFormat = toolBar->addAction("pasteF");
   pasteFormat->setIcon(QPixmap(":/icon/Icons/paste.png"));
   connect(pasteFormat, SIGNAL(triggered()), this, SLOT(setFofmat()));
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::onPushButtonInfoClicked()
{
    QFile file(":/txt/info.txt");
    if (file.open(QIODevice::ReadOnly)) {
        QByteArray ba = file.readAll();
        QString txt(ba);
        QMessageBox::information(this, "Справка", txt);
    }
   // :/txt/info.txt
}


void MainWindow::onPushButtonOpenClicked()
{
    //mdiArea->addSubWindow(new QTextEdit(mdiArea));
    QString path = QFileDialog::getOpenFileName(this,
                                                tr("Open file"),
                                                "C:/gb/Qt/lesson3"
                                                );
    if (path.isEmpty()) return;
    QFile file(path);
    QMdiSubWindow* activeSubWindow = mdiArea->activeSubWindow();
    QWidget* widget =activeSubWindow->widget();
    QTextEdit* textEdit = (QTextEdit*)widget;
    if (file.open(QIODevice::ReadOnly)) {
        QByteArray ba = file.readAll();
        QString text(ba);
       // mdiArea->addSubWindow(new QTextEdit(this));
        textEdit->setText(text);
    } 
    else textEdit->setText(tr("No opened"));
    //устанавливаем режим "только для чтения" при нажатой radiobutton
    //if ( pReadOnlyAction->setChecked(false);) ui->plainTextEdit->setReadOnly(true);
}


void MainWindow::onPushButtonSaveClicked()
{
    QString path = QFileDialog::getSaveFileName();
    QFile file(path);
    if (file.open(QIODevice::WriteOnly)) {
        QMdiSubWindow* activeSubWindow = mdiArea->activeSubWindow();
        QWidget* widget =activeSubWindow->widget();
        QTextEdit* textEdit = (QTextEdit*)widget;
        QString text = textEdit->toPlainText();
        QByteArray ba = text.toUtf8();
        file.write(ba, ba.length());
    }
}


//void MainWindow::on_comboBox_currentIndexChanged(int index)
//{
//  if (index == 0) translator.load(":/tr/QtLanguage_ru.qm");
//  if (index == 1) translator.load(":/tr/QtLanguage_en.qm");
//  qApp->installTranslator(&translator);
//}

void MainWindow::changeEvent(QEvent * event)
{
    if (event->type() == QEvent::LanguageChange) ui->retranslateUi(this);
    //if (event->type() == QEvent::StyleChange) ui->setupUi(this);
}

//-----3-----//
void MainWindow::slotShortcutCtrlO()
{
    MainWindow::onPushButtonOpenClicked();
}

void MainWindow::slotShortcutCtrlS()
{
    MainWindow::onPushButtonSaveClicked();
}

void MainWindow::slotShortcutCtrlN()
{
    QString path = "C:/gb/Qt/lesson3";
    if (path.isEmpty()) return;

    QFile file(path);
    file.open(QIODevice::ReadOnly);
//   ui->plainTextEdit->setPlainText("");

}

void MainWindow::slotShortcutCtrlQ()
{
    qApp->exit();
}

//void MainWindow::on_pushButton_clicked()
//{
//   // keyCtrlF3 = new QShortcut(this); //инициализация
//    keyCtrlO->setKey(Qt::Key_F3); //установка кода клавиш
//    connect(keyCtrlO, SIGNAL(activated()), this, SLOT(slotShortcutCtrlO()));
//}

//void MainWindow::on_comboBox_style_currentIndexChanged(int index)
//{
//  if (index == 0)
//  {//светлая тема
//      setStyleSheet("QMainWindow { background-color: lightGray; color : black }"
//                    "QPushButton { background-color: lightGray; color : black }"
//                    "QPlainTextEdit { background-color: white; color : black }"
//                    "QLabel {  color : black }"
//                    "QRadioButton { color : black }");
//   }
//  if (index == 1)
//  {//тёмная тема
//      setStyleSheet("QMainWindow { background-color: black; color : white }"
//                    "QPushButton { background-color: darkGray; color : white }"
//                    "QPlainTextEdit { background-color: darkGray; color : white }"
//                    "QLabel {  color : white }"
//                    "QRadioButton {  color : grey }");
//  }
//}


void MainWindow::onPushButtonPrintClicked()
{
    QPrinter printer;
    QPrintDialog dlg(&printer, this);
    dlg.setWindowTitle("Print");
    if (dlg.exec() != QDialog::Accepted) return;
    QMdiSubWindow* activeSubWindow = mdiArea->activeSubWindow();
    QWidget* widget =activeSubWindow->widget();
    QTextEdit* textEdit = (QTextEdit*)widget;
    textEdit->print(&printer);
}
//-----6-----//
void MainWindow::setRusLang()
{
    translator.load(":/tr/QtLanguage_ru.qm");
    qApp->installTranslator(&translator);
}
void MainWindow::setEngLang()
{
    translator.load(":/tr/QtLanguage_en.qm");
    qApp->installTranslator(&translator);
}
void MainWindow::setLightThemeSlot() //светлая тема
{
    setStyleSheet("QMainWindow { background-color: lightGray; color : black }"
                  "QPushButton { background-color: lightGray; color : black }"
                  "QPlainTextEdit { background-color: white; color : black }"
                  "QLabel {  color : black }"
                  "QRadioButton { color : black }");
}
void MainWindow::setDarkThemeSlot() //тёмная тема
{
    setStyleSheet("QMainWindow { background-color: black; color : white }"
                  "QPushButton { background-color: darkGray; color : white }"
                  "QPlainTextEdit { background-color: darkGray; color : white }"
                  "QLabel {  color : white }"
                  "QRadioButton {  color : grey }");
}

void MainWindow::setFont()
{
   QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
//    QWidget* widget =activeSubWindow->widget();
//    QTextEdit* textEdit = (QTextEdit*)widget;
    QFont font = textEdit->textCursor().charFormat().font();
    QFontDialog fntDlg(font, this);
    bool b[] = {true};
    font = fntDlg.getFont(b);
    if (b[0])
    {
        QTextCharFormat fmt = textEdit->textCursor().charFormat();
        fmt.setFont(font);
        textEdit->textCursor().setCharFormat(fmt);
    }
}

void MainWindow::setLeftAlig()
{
    QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
    textEdit->setAlignment(Qt::AlignLeft);
}

void MainWindow::setRightAlig()
{
    QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
    textEdit->setAlignment(Qt::AlignRight);
}

void MainWindow::setCenterAlig()
{
    QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
    textEdit->setAlignment(Qt::AlignCenter);
}

void MainWindow::getFormat()
{
    QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
    fmt = textEdit->textCursor().charFormat();
}

void MainWindow::setFofmat()
{
    QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
    textEdit->textCursor().setCharFormat(fmt);
}

//void MainWindow::setAlignment(Qt::Alignment alignment)
//{
//    QTextEdit* textEdit = (QTextEdit*) mdiArea->activeSubWindow()->widget();
//    textEdit->setAlignment(alignment);
//}



