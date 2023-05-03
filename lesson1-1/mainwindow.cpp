#include "mainwindow.h"
//#include "ui_mainwindow.h"
#include <QPainter>
#include <QPoint>
#include <QGraphicsSceneMouseEvent>
#include <QMouseEvent>
#include <QWheelEvent>
#include <QPainterPath>
#include <QtMath>

MainWindow::MainWindow(QWidget *parent)
    : QGraphicsView(parent)
{
    this->setMinimumSize(960, 540);
    figureType_ = FigureTypes::RECTANGLE;
    scene_ = new QGraphicsScene(this);
    scene_->setSceneRect(0, 0, 1920, 1080);
    setScene(scene_);
    srand(clock());
}

MainWindow::~MainWindow()
{
}

void MainWindow::mousePressEvent(QMouseEvent *event)
{
    currentPos_ = this->mapToScene(event->pos());
    currentShape_ = findShape();

    if (Qt::LeftButton == event->button() && !currentShape_)
    {
        BlockScheme* shape;
        if (FigureTypes::STAR != figureType_)
        {
            QPoint topLeft(currentPos_.toPoint().x(), currentPos_.toPoint().y());
            QPoint botRight(currentPos_.toPoint().x() + scene_->width() / (5 + rand() % 5), currentPos_.toPoint().y() + scene_->height() / (5 + rand() % 5));
            shape = new BlockScheme(scene_, figureType_, QPolygon(QRect(topLeft, botRight)));
            shapes_.append(shape);
            scene_->addItem(shapes_.last());
        }
        else
        {
            shape = new BlockScheme(scene_, figureType_, makeStar());
            shapes_.append(shape);
            scene_->addItem(shapes_.last());
        }
        connect(shape, &BlockScheme::reDraw, this, &MainWindow::reDraw);
    }
    else if (event->button() == Qt::RightButton)
    {
        if (currentShape_)
        {
            deleteShape();
        }
    }

    QGraphicsView::mousePressEvent(event);
}

void MainWindow::mouseReleaseEvent(QMouseEvent *event)
{
    if (event->button() == Qt::RightButton || event->button() == Qt::MiddleButton)
    {
        return;
    }

    if (FigureTypes::STAR != figureType_ && !currentShape_)
    {
        ++figureType_;
    }
    else if (!currentShape_)
    {
        figureType_ = FigureTypes::RECTANGLE;
    }

    QGraphicsView::mouseReleaseEvent(event);
}

void MainWindow::wheelEvent(QWheelEvent *event)
{
    const qreal scaleFactor = pow(2.0, event->angleDelta().y() / 240.0);
    scale(scaleFactor, scaleFactor);
}

void MainWindow::keyPressEvent(QKeyEvent *event)
{
    const qreal scaleFactor = 0.5;
    if (Qt::Key_Plus == event->key())
    {
        scale(scaleFactor + 1, scaleFactor + 1);
    }
    else if (Qt::Key_Minus == event->key())
    {
        scale(scaleFactor, scaleFactor);
    }
}

QPolygon MainWindow::makeStar()
{
    QPolygon star;

    const int rays = 5;
    const double angle = 2 * 3.14 / rays;
    const int outerRadius = 40 + rand() % 100;
    const int innerRadius = outerRadius / 2;

    for (int i = 1; i <= rays; ++i)
    {
        star.append(currentPos_.toPoint() + QPoint(innerRadius * cos((i - 0.5) * angle),
                                         innerRadius * sin((i - 0.5) * angle)));

        star.append(currentPos_.toPoint() + QPoint(outerRadius * cos(i * angle),
                                         outerRadius * sin(i * angle)));
    }
    return star;
}

QGraphicsItem* MainWindow::findShape()
{
    return scene_->itemAt(currentPos_, QTransform());
}

void MainWindow::deleteShape()
{
    scene_->removeItem(currentShape_);
    currentShape_ = nullptr;
}

void MainWindow::reDraw()
{
    scene_->update();
    this->update();
}
