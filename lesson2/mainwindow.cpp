#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "parsetext.h"
#include <stdlib.h>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

//-----2-----//
    QStringList list { "C++", "Python", "Java", "C#", "PHP", "JavaScript" };
    model = new QStandardItemModel(list.size(),1,this);
    for (int i=0; i<model->rowCount(); ++i) {
        QModelIndex index = model->index(i, 0);
        QString str = list[i];
        model->setData(index, str, Qt::DisplayRole);
        model->setData(index, "Это " + str, Qt::ToolTipRole);
        model->setData(index, QIcon("./Icons/" + str+ ".png"), Qt::DecorationRole);
    }

    ui->listView->setViewMode(QListView::ListMode);
    // ui->listView->setSelectionMode(QAbstractItemView::SingleSelection);
    ui->listView->setModel(model);
    //ui->listView->setDragEnabled(true);
    // ui->listView->viewport()->setAcceptDrops(true);
    ui->listView->setDropIndicatorShown(true);
    ui->listView->setDragDropMode(QAbstractItemView::InternalMove);
//-----3-----//
    ui->tableWidget->setRowCount(2);
    ui->tableWidget->setColumnCount(4);
    ui->tableWidget->setHorizontalHeaderLabels(QStringList() << "№" << "Имя компьютера" << "IP адрес" << "MAC адрес");
    for (int i = 0; i<ui->tableWidget->rowCount(); ++i){
        ui->tableWidget->setItem(i,0, new QTableWidgetItem(QString("%1").arg(i)));
        ui->tableWidget->setItem(i,1, new QTableWidgetItem(QString("Компьютер № %1").arg(i)));
        ui->tableWidget->setItem(i,2, new QTableWidgetItem(QString("192.168.0.%1").arg(i)));
    }
    ui->tableWidget->setItem(0,3, new QTableWidgetItem(QString("12:3F:55:91:A1:CF")));
    ui->tableWidget->setItem(1,3, new QTableWidgetItem(QString("09:3F:55:91:A1:32")));
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_plainTextEdit_textChanged()
{
    QString txt = ui->plainTextEdit->toPlainText();
    qint32 pos = 0;
    while (1) {
        qint32 fnd = txt.indexOf("#@", pos);
        if (fnd==-1) return;
        pos = fnd + 2;
        int r = txt.indexOf("@", pos);
        int spase = txt.indexOf(" ", fnd);
        //Если захотим менять "руб" или "евро", то добавляем поиск между " " и "." или " ".
        if ((r<spase || spase==-1) && r!=-1){
            ParseText parseText(txt.mid(fnd+2, r-pos));
            qint32 size = txt.mid(fnd, r - 1).size();
            txt.remove(fnd, size);
            txt.insert(fnd, parseText.getText());
            ui->plainTextEdit->setPlainText(txt);
            QTextCursor cursor = ui->plainTextEdit->textCursor();
            cursor.movePosition(QTextCursor::End);
            ui->plainTextEdit->setTextCursor(cursor); //перемещаем курсор в конец
        }
    }
}


void MainWindow::on_pushButton_clicked()
{
    QString str = "New";
    model->insertRow(model->rowCount());
    QModelIndex index = model->index(model->rowCount()-1, 0);
    model->setData(index, str, Qt::DisplayRole);
    model->setData(index, "Это " + str, Qt::ToolTipRole);
    model->setData(index, QIcon("./Icons/" + str+ ".png"), Qt::DecorationRole);
}


void MainWindow::on_pushButton_2_clicked()
{
    model->removeRow(ui->listView->currentIndex().row());
}


void MainWindow::on_checkBox_stateChanged(int arg1)
{
    if (ui->checkBox->isChecked())
          ui->listView->setViewMode(QListView::IconMode);
    else  ui->listView->setViewMode(QListView::ListMode);
}


void MainWindow::on_tableWidget_itemClicked(QTableWidgetItem *item)
{
    item->setBackground(Qt::blue);
}
void MainWindow::on_tableWidget_currentItemChanged(QTableWidgetItem *current, QTableWidgetItem *previous) {
    current->setBackground(Qt::blue);
    previous->setBackground(Qt::red);
}

