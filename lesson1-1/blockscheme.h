#ifndef BLOCKSCHEME_H
#define BLOCKSCHEME_H

#include <QObject>
#include <QGraphicsItem>
#include <QBrush>

class BlockScheme : public QObject, public QGraphicsItem
{
    Q_OBJECT

public:
    explicit BlockScheme(QObject *parent = nullptr);
    BlockScheme(QObject *parent = nullptr, int shapeType = 0, QPolygon shape = QPolygon());
    QRectF boundingRect() const override;
    bool containsPoint(const QPoint& point);

protected:
    void mousePressEvent(QGraphicsSceneMouseEvent* event) override;
    void mouseReleaseEvent(QGraphicsSceneMouseEvent* event) override;
    void mouseMoveEvent(QGraphicsSceneMouseEvent* event) override;

private:
    void paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget = nullptr) override;

signals:
    void reDraw();

private:
    enum FigureTypes
    {
        RECTANGLE = 0,
        ELLIPCE = 1,
        STAR = 2
    };

    FigureTypes fType_;
    QPolygon figure_;
    QBrush brush_;
    QPoint currentPos_;
    bool isMoving_ = false;
    bool isRotating_ = false;
};

#endif // BLOCKSCHEME_H
