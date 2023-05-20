#ifndef DOWNLOADER_H
#define DOWNLOADER_H

#include <QNetworkAccessManager>
#include <QObject>

class Downloader : public QObject
{
    Q_OBJECT
public:
    explicit Downloader(QObject *parent = nullptr);
    void download(const QUrl&);

signals:
    void dowmloadProgress(int, int);
    void done(const QUrl&, const QByteArray&);
    void error();

private slots:
    void slotFinished(QNetworkReply*);

private:
    QNetworkAccessManager* pnam;

};

#endif // DOWNLOADER_H
