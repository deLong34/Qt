#include "mywidget.h"
#include "qpushbutton.h"
#include <QDir>

myWidget::myWidget(QWidget *parent)
    : QWidget{parent}
    , model(nullptr)
{
    gridLay = new QGridLayout(this); // создаем слой для компоновки
    this->setLayout(gridLay); // устанавливаем слой на виджет
    tree = new QTreeView(this);
    gridLay->addWidget(tree, 1, 0, 10, 10);
    setMinimumSize(500, 600); // ограничиваем размер виджета
//    if(QSysInfo::productType() == "windows")
//    {
        disckSelBox = new QComboBox(this);
        pathLabel = new QLabel(this);
        QFileInfoList list = QDir::drives();
        QFileInfoList::const_iterator listdisk = list.begin();
        int amount = list.count();
        for (int i = 0; i < amount; i++)
        {
            disckSelBox->addItem(listdisk->path());
            listdisk++;
        }
        if (amount > 0)
        {
            rebuildModel(list.at(0).path());
        }
        gridLay->addWidget(disckSelBox, 0, 0, 1, 2); // координаты
        pathLabel->setText(tr("Каталог: ") + curretnPath);
        gridLay->addWidget(pathLabel, 0, 3, 1, 5  );
        connect(disckSelBox, SIGNAL(activated(int)), this, SLOT(chgDisk(int)));
//    } else
//    {
//        mainPath = new QPushButton(this);
//        mainPath->setText("/");
//        gridLay->addWidget(mainPath, 0, 0, 1, 2);
//        connect(mainPath, SIGNAL(clicked()), this, SLOT(goMainPath()));
//        rebuildModel("/");
//    }
}

void myWidget::chgDisk(int index)
{
    QFileInfoList list = QDir::drives();
    rebuildModel(list.at(index).path());
}
//void myWidget::chCurPath(int index)
//{
//    curretnPath = tree->
//}

//void myWidget::goMainPath()
//{
//    rebuildModel("/");
//}


void myWidget::setNewModel(QStandardItemModel *newmodel)
{
    tree->setModel(newmodel);
    model = newmodel;
}

void myWidget::rebuildModel(QString str)
{
    curretnPath = str;
    QStandardItemModel *model = new QStandardItemModel(this);
    QList<QStandardItem*> items;
    items.append(new QStandardItem(QIcon(QApplication::style()->standardIcon(QStyle::SP_DriveHDIcon)), str));
    model->appendRow(items);
    QDir dir(str);
    dir.setFilter(QDir::Hidden | QDir::NoSymLinks | QDir::Dirs);
    QStringList list = dir.entryList();
    int amount = list.count();
    QList<QStandardItem*>folders;
    for (int i = 0; i < amount; i++)
    {
        QStandardItem* f = new QStandardItem(QIcon(QApplication::style()->standardIcon(QStyle::SP_DirIcon)), list.at(i));
        folders.append(f);
    }
    items.at(0)->appendRows(folders);
    dir.setFilter(QDir::Hidden | QDir::NoSymLinks | QDir::Files);amount =
    list.count();
    QList<QStandardItem*>files;
    for (int i = 0; i < amount; i++)
    {
        QStandardItem* f = new QStandardItem(QIcon(QApplication::style()->standardIcon(QStyle::SP_FileIcon)), list.at(i));
        files.append(f);
    }
    items.at(0)->appendRows(files);
    setNewModel(model);
}