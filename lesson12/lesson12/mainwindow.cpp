#include "mainwindow.h"

#include <QFile>
#include <QGridLayout>
#include <QLabel>
#include <QMessageBox>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
{
    downloader = new Downloader(this);
    ppb = new QProgressBar(this);
    txt = new QLineEdit(this);
    button = new QPushButton("Go", this);

    connect(button, SIGNAL(clecked()), SLOT(slotGo()));
    connect(downloader, SIGNAL(downloadProgress(int, int)),
            SLOT(downloadProgress(int, int)));
    connect(downloader, SIGNAL(done(const QUrl&, const QByteArray&)),
            SLOT(slotDone(const QUrl&, const QByteArray&)));
    QGridLayout *layout = new QGridLayout(this);
    layout->addWidget(txt, 0,0);
    layout->addWidget(button, 0,1);
    layout->addWidget(ppb, 1,0,1,2);

    QWidget *wgt = new QWidget(this);
    setCentralWidget(wgt);
    wgt->setLayout(layout);
}

MainWindow::~MainWindow()
{
}

void MainWindow::showPic(const QString &path)
{
    QPixmap pix(path);
    pix = pix.scaled(pix.size() / 3);
    QLabel *label = new QLabel();
    label->setPixmap(pix);
    label->setFixedSize(pix.size());
    label->show();
}

void MainWindow::slotGo()
{
    downloader->download(QUrl(txt->text()));
}

void MainWindow::slotError()
{
    QMessageBox::critical(this, "Error", "Error!" );
}

void MainWindow::slotDowloadProgress(int received, int total)
{
    if (total <= 0){
        slotError();
        return;
    }
    ppb->setValue(100*received / total);
}

void MainWindow::slotDone(const QUrl &url, const QByteArray &ba)
{
    QFile file(url.path().section('/', -1));
    if (file.open(QIODevice::WriteOnly)) {
        file.write(ba);
        file.close();
    }

    showPic(file.fileName());

}

