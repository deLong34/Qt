#include "blockscheme.h"
#include <QPainter>
#include <QGraphicsSceneMouseEvent>

BlockScheme::BlockScheme(QObject *parent)
    : QObject{parent},
      QGraphicsItem()
{

}

BlockScheme::BlockScheme(QObject *parent, int fType, QPolygon shape)
    : QObject(parent),
      QGraphicsItem(),
      figure_(shape)
{
    srand(clock());

    switch(fType)
    {
    case FigureTypes::RECTANGLE: fType_ = FigureTypes::RECTANGLE;
        break;

    case FigureTypes::ELLIPCE: fType_ = FigureTypes::ELLIPCE;
        break;
    case FigureTypes::STAR:
        fType_ = FigureTypes::STAR;
        break;
    }

    brush_.setColor(QColor(rand() % 256, rand() % 256, rand() % 256));
    brush_.setStyle(Qt::BrushStyle::SolidPattern);
    this->setTransformOriginPoint(figure_.boundingRect().center());
}

void BlockScheme::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget)
{
    painter->setBrush(brush_);
    switch(fType_)
    {
    case FigureTypes::RECTANGLE: painter->drawRect(figure_.boundingRect());
        break;
    case FigureTypes::ELLIPCE: painter->drawEllipse(figure_.boundingRect());
        break;
    case FigureTypes::STAR:
        painter->drawPolygon(figure_);
        break;
    }

    Q_UNUSED(option);
    Q_UNUSED(widget);
}

QRectF BlockScheme::boundingRect() const
{
    return figure_.boundingRect();
}

bool BlockScheme::containsPoint(const QPoint& point)
{
    return figure_.containsPoint(point, Qt::FillRule::OddEvenFill);
}

void BlockScheme::mousePressEvent(QGraphicsSceneMouseEvent *event)
{
    if (Qt::LeftButton == event->button())
    {
        isMoving_ = true;
        currentPos_ = event->pos().toPoint();
    }
    if (Qt::MiddleButton == event->button())
    {
        isRotating_ = true;
    }
}

void BlockScheme::mouseReleaseEvent(QGraphicsSceneMouseEvent *event)
{
    if (Qt::LeftButton == event->button())
    {
        isMoving_ = false;
    }
    else if (Qt::MiddleButton == event->button())
    {
        isRotating_ = false;
    }
}

void BlockScheme::mouseMoveEvent(QGraphicsSceneMouseEvent *event)
{
    if (isMoving_)
    {
        const QPoint delta = event->pos().toPoint() - currentPos_;

        for (int i = 0; i < figure_.size(); ++i)
        {
            figure_[i].setX(figure_[i].x() + delta.x());
            figure_[i].setY(figure_[i].y() + delta.y());
        }
        currentPos_ = event->pos().toPoint();
        this->setTransformOriginPoint(figure_.boundingRect().center());
    }

    if (isRotating_)
    {
        const qreal angle = 10;

        this->setRotation(this->rotation() + angle);

        if (360 == this->rotation())
        {
            this->setRotation(0);
        }
    }
    emit reDraw();
}
