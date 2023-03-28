#include "mainwindow.h"
#include "ui_mainwindow.h"

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

//-----1-----//
void MainWindow::on_pushButton_clicked()
{
    int a = ui->lineEdit->text().toInt();
    int b = ui->lineEdit_2->text().toInt();
    int c = ui->lineEdit_3->text().toInt();
    int D = (b*b - 4*a*c);
    if (a == 0)
    {
        double x = -c / b;
        QString answer = "х = " + QString::number(x);
        ui->label_result1->setText(answer);
    }
    else if (D > 0)
    {
        double x1 = (-b + qSqrt(D))/(2*a);
        double x2 = (-b - qSqrt(D))/(2*a);
        QString answer = "х1 = " + QString::number(x1) + "; x2 = " + QString::number(x2);
        ui->label_result1->setText(answer);
    }
    else if (D == 0)
    {
        double x = (-b)/(2*a);
        QString answer = "х = " + QString::number(x);
        ui->label_result1->setText(answer);
    }
    else ui->label_result1->setText("Нет корней");
}


void MainWindow::on_pushButton_2_clicked()
{
    int a = ui->lineEdit_4->text().toInt();
    int b = ui->lineEdit_5->text().toInt();
    int y = ui->lineEdit_6->text().toInt();
    if (ui->radioButton->isChecked())
    {
       int c = qSqrt((a * a) + (b * b) - (2 * a * b * qCos(y)));
       ui->label_result2->setText("с = " + QString::number(c));
    }
    else if (ui->radioButton_2->isChecked())
    {
        int c = qSqrt((a * a) + (b * b) - (2 * a * b * qCos(180*y/M_PI)));
        ui->label_result2->setText("с = " + QString::number(c));
    }
}


void MainWindow::on_pushButton_3_clicked()
{
    QString text1 = ui->plainTextEdit->toPlainText();
    ui->plainTextEdit_2->appendPlainText(text1);
}


void MainWindow::on_pushButton_4_clicked()
{
    QString text1 = ui->plainTextEdit->toPlainText();
    QString text2 = ui->plainTextEdit_2->toPlainText();
    ui->plainTextEdit->setPlainText(text2);
    ui->plainTextEdit_2->setPlainText(text1);
}


void MainWindow::on_pushButton_5_clicked()
{
    const QString textHTML = "<font color='red'>Hello</font>";
    ui->plainTextEdit->clear();
    ui->plainTextEdit->appendHtml(textHTML);
}

