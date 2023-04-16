#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>
#include <QDir>
#include <QFileDialog>
#include <QTranslator>
#include <QKeyEvent>
#include "mywidget.h"


MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->label->setText(tr("Text Editor"));
    ui->label_2->setText(tr("Language"));
    ui->pushButton_open->setText(tr("Open"));
    ui->pushButton_save->setText(tr("Save"));
    ui->pushButton_info->setText(tr("Info"));
    ui->radioButton->setText(tr("Read only"));
    ui->comboBox->addItems(QStringList() << "Русский" << "English");
    connect(ui->comboBox, &QComboBox::currentIndexChanged, this, &MainWindow::on_comboBox_currentIndexChanged);
    //----5----//
    ui->comboBox_style->addItems(QStringList() << tr("lite") << tr("dark"));
    connect(ui->comboBox_style, &QComboBox::currentIndexChanged, this, &MainWindow::on_comboBox_style_currentIndexChanged);
    //3
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
    QWidget* mywgt = new myWidget(this);
    mywgt->move(0,150);
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_pushButton_info_clicked()
{
    QFile file(":/txt/info.txt");
    if (file.open(QIODevice::ReadOnly)) {
        QByteArray ba = file.readAll();
        QString txt(ba);
        QMessageBox::information(this, "Справка", txt);
    }
   // :/txt/info.txt
}


void MainWindow::on_pushButton_open_clicked()
{
    QString path = QFileDialog::getOpenFileName(this,
                                                tr("Open file"),
                                                "C:/gb/Qt/lesson3"
                                                );
    if (path.isEmpty()) return;

    QFile file(path);
    if (file.open(QIODevice::ReadOnly)) {
        QByteArray ba = file.readAll();
        QString text(ba);
        ui->plainTextEdit->setPlainText(text);
    } 
    else ui->plainTextEdit->setPlainText(tr("No opened"));
    //устанавливаем режим "только для чтения" при нажатой radiobutton
    if (ui->radioButton->isChecked()) ui->plainTextEdit->setReadOnly(true);
}


void MainWindow::on_pushButton_save_clicked()
{
    QString path = QFileDialog::getSaveFileName();
    QFile file(path);
    if (file.open(QIODevice::WriteOnly)) {
        QString text = ui->plainTextEdit->toPlainText();
        QByteArray ba = text.toUtf8();
        file.write(ba, ba.length());
    }
}


void MainWindow::on_comboBox_currentIndexChanged(int index)
{
  if (index == 0) translator.load(":/tr/QtLanguage_ru.qm");
  if (index == 1) translator.load(":/tr/QtLanguage_en.qm");
  qApp->installTranslator(&translator);
}

void MainWindow::changeEvent(QEvent * event)
{
    if (event->type() == QEvent::LanguageChange) ui->retranslateUi(this);
    //if (event->type() == QEvent::StyleChange) ui->setupUi(this);
}

//-----3-----//
void MainWindow::slotShortcutCtrlO()
{
    MainWindow::on_pushButton_open_clicked();
}

void MainWindow::slotShortcutCtrlS()
{
    MainWindow::on_pushButton_save_clicked();
}

void MainWindow::slotShortcutCtrlN()
{
    QString path = "C:/gb/Qt/lesson3";
    if (path.isEmpty()) return;

    QFile file(path);
    file.open(QIODevice::ReadOnly);
    ui->plainTextEdit->setPlainText("");

}

void MainWindow::slotShortcutCtrlQ()
{
    qApp->exit();
}

void MainWindow::on_pushButton_clicked()
{
   // keyCtrlF3 = new QShortcut(this); //инициализация
    keyCtrlO->setKey(Qt::Key_F3); //установка кода клавиш
    connect(keyCtrlO, SIGNAL(activated()), this, SLOT(slotShortcutCtrlO()));
}

void MainWindow::on_comboBox_style_currentIndexChanged(int index)
{
  if (index == 0)
  {//светлая тема
      setStyleSheet("QMainWindow { background-color: lightGray; color : black }"
                    "QPushButton { background-color: lightGray; color : black }"
                    "QPlainTextEdit { background-color: white; color : black }"
                    "QLabel {  color : black }"
                    "QRadioButton { color : black }");
   }
  if (index == 1)
  {//тёмная тема
      setStyleSheet("QMainWindow { background-color: black; color : white }"
                    "QPushButton { background-color: darkGray; color : white }"
                    "QPlainTextEdit { background-color: darkGray; color : white }"
                    "QLabel {  color : white }"
                    "QRadioButton {  color : grey }");
  }
}

