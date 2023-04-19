#ifndef MYWIDGET_H
#define MYWIDGET_H

#include <QWidget>
#include <QGridLayout>
#include <QTreeView>
#include <QComboBox>
#include <QPushButton>
#include <QStandardItemModel>
#include <QApplication>
#include <QLabel>



class myWidget : public QWidget
{
    Q_OBJECT
public:
    explicit myWidget(QWidget* parent = nullptr);
    void clearTree();
    QStandardItemModel *getCurrentModel()const { return model; }
    void setNewModel(QStandardItemModel *newmodel);
    void rebuildModel(QString str);
private:
    QGridLayout *gridLay;
    QTreeView *tree;
    QPushButton *mainPath;
    QComboBox *disckSelBox;
private slots:
    void chgDisk(int index); // получаем индекс выбранного диска
    // void goMainPath(); // Для UNIX-подобных ОС верхним уровнем является
    //void chCurPath(int index);
private:
    QStandardItemModel *model;
    QString curretnPath;
    QLabel *pathLabel;
protected:

};

#endif // MYWIDGET_H
