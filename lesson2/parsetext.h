#ifndef PARSETEXT_H
#define PARSETEXT_H

#include <QMainWindow>
#include <QObject>
#include <QWidget>

class ParseText
{
public:
    //ParseText();
    ParseText(QString);
   // bool change(QString);
    QString getText();
private:
    QString text;    //текущий
    QString preText; //предварительно отформатированный
    //qint32 pos;      //позиция указателя поиска
};

#endif // PARSETEXT_H
