import QtQuick 2.12
import QtQuick.Controls 2.15
import QtQuick.Window 2.12
import QtQuick.Layouts 1.0
import DataOrg 1.0
import Qt.labs.qmlmodels 1.0
ApplicationWindow {
    id: _root
    visible: true
    width: 640
    height: 480
    DataOrg
    {
        id: _dataorg
    }
    TableView {
        id: _data
        anchors.fill: parent
             columnSpacing: 1
             rowSpacing: 1
             clip: true
        model: TableModel {
            id: _model
            TableModelColumn { display: "taskName" }
            TableModelColumn { display: "deadLine" }
            TableModelColumn { display: "progress" }
            rows: [ { "taskName": "Название задачи", "deadLine": "Дедлайн", "progress": "Прогресс" } ]
        }
        delegate: Rectangle {
            implicitWidth: 200
            implicitHeight: 30
            border.width: 1
            Text {
                anchors.centerIn: parent
                text: display
            }
        }
    }
    Button
    {
        id: _button
        x: 601
        y: 1
        text: "Обновить"
        onClicked:{
            while (_model.rowCount > 1)
                _model.removeRow(1, 1);
            var len = _dataorg.getCount();
            var deadLine = _dataorg.getDeadLine();
            var progress = _dataorg.getProgress();
            var taskName = _dataorg.getTaskName();
            for (var i = 0; i < len; i++)
                _model.appendRow({taskName: taskName[i], deadLine: deadLine[i], progress: progress[i]})}
    }
}
