#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>
#include <QDir>
#include <QFileDialog>
#include <QRegularExpression>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
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
                                                tr("Открыть файл"),
                                                "C:/gb/Qt/lesson3"
                                                );
    if (path.isEmpty()) return;
    QFile file(path);
    if (file.open(QIODevice::ReadOnly)) {
        QByteArray ba = file.readAll();
        QString text(ba);
        ui->plainTextEdit->setPlainText(text);
    }
    else ui->plainTextEdit->setPlainText("No opened");
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


void MainWindow::on_pushButton_get_clicked()
{
    QString path = QFileDialog::getOpenFileName(this,
                                                tr("Открыть файл"),
                                                "C:/gb/Qt/lesson3"
                                                );
    if (path.isEmpty()) {
        ui->plainTextEdit_2->setPlainText("Ошибка!");
        ui->lineEditUSD->clear();
        ui->lineEditEUR->clear();
        ui->lineEditOIL->clear();
        ui->lineEditW->clear();
        return;
    }
    QFile file(path);
    if (file.open(QIODevice::ReadOnly)) {
        QByteArray ba = file.readAll();
        QString text(ba);
        ui->plainTextEdit_2->setPlainText(text);
    }
    else ui->plainTextEdit_2->setPlainText("No opened");
    QString html = ui->plainTextEdit_2->toPlainText();
    ui->lineEditUSD->setText(getData(html).at(0));
    ui->lineEditEUR->setText(getData(html).at(1));
    ui->lineEditOIL->setText(getData(html).at(2));
}

QStringList MainWindow::getData(const QString &html)
{
    QStringList list;
    int lastPos = 0;
    QString fnd = "<div class=\"rate__currency>";
    QString begin = ">";
    QString end = "</div>";
    while (1) {
            int pos = html.indexOf(fnd, lastPos);
            //нашли индекс начала скрипта
            if (pos == -1) return list;
            //если не нашли начало - возвращаем список
            int beginPos = pos + html.indexOf(begin, pos) + 1;
            //нашли индекс начала данных
            int endPos = beginPos + html.indexOf(end, beginPos);
            //нашли индекс конца данных
            QString data = html.mid(beginPos, endPos - beginPos);
            //вынули данные из текста
            lastPos = endPos;
            list << data;
            //поместили данные в список
    }
    //weather-temp">+18°</span>
}
QString MainWindow::WethergetData(const QString &html)
{
    QString data;
    int lastPos = 0;
    QString fnd = "weather-temp";
    QString begin = ">";
    QString end = "</span>";
    int pos = html.indexOf(fnd, lastPos);
    //нашли индекс начала скрипта
    if (pos == -1) return data;
    //если не нашли начало - возвращаем список
    int beginPos = pos + html.indexOf(begin, pos) + 1;
    //нашли индекс начала данных
    int endPos = beginPos + html.indexOf(end, beginPos);
    //нашли индекс конца данных
    data = html.mid(beginPos, endPos - beginPos);
    //вынули данные из текста
    // lastPos = endPos;
    return data;
}

