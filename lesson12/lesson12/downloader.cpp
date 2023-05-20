#include "downloader.h"
//#include "qobjectdefs.h"
#include <QNetworkReply>

Downloader::Downloader(QObject *parent)
    : QObject{parent}
{
     pnam = new QNetworkAccessManager(this);
     connect(pnam, SIGNAL(finished(QNetworkReply*)), SLOT(slotFinished(QNetworkReply*)));
}

void Downloader::download(const QUrl &url)
{
     QNetworkRequest request(url);
     QNetworkReply* reply = pnam->get(request);
     connect(reply, SIGNAL(dowloadProgress(int, int)), SIGNAL(dowloadProgress(int, int)));
}

void Downloader::slotFinished(QNetworkReply *reply)
{
    if (reply->error() != QNetworkReply::NetworkError::NoError) {
        emit error();
    }
    else {
        emit done(reply->url(), reply->readAll());
    }
    reply->deleteLater();
}
