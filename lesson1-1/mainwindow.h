#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QGraphicsView>
#include <QGraphicsScene>
#include "blockscheme.h"
#include <QWidget>
#include <QMultiMap>
#include <QGraphicsView>
#include <QGraphicsScene>



class MainWindow : public QGraphicsView
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

protected:
    void mousePressEvent(QMouseEvent* event) override;
    void mouseReleaseEvent(QMouseEvent* event) override;
    void wheelEvent(QWheelEvent *event) override;
    void keyPressEvent(QKeyEvent *event) override;

private:
    QPolygon makeStar();
    void draw(QPainter& painter);
    QGraphicsItem* findShape();
    void deleteShape();

private slots:
    void reDraw();

private:
    QPointF currentPos_;
    QList<BlockScheme*> shapes_;
    QGraphicsItem* currentShape_ = nullptr;
    QGraphicsScene* scene_ = nullptr;

    enum FigureTypes
    {
        RECTANGLE = 0,
        ELLIPSE = 1,
        STAR = 2
    };

    int figureType_;
};
#endif // MAINWINDOW_H
