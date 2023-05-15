import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12
import DataOrg 1.0


ApplicationWindow  {
    id: _root
    width: 290
    height: 150
    visible: true
    title: qsTr("Органайзер 1.0")
    onClosing: _dataorg.closeDataOrg()
    DataOrg
    {
        id: _dataorg
    }
    GridLayout{
        rows:4
        columns: 2
        TextField
        {
            id: _taskName
            Layout.row: 0
            Layout.column: 0
            placeholderText: "Название задачи"
            width:10
        }
        TextField
        {
            id: _deadLine
            Layout.row: 1
            Layout.column: 0
            placeholderText: "Дедлайн"
            width:640
        }
        TextField
        {
            id: _progress
            Layout.row: 2
            Layout.column: 0
            placeholderText: "Процент выполнения"
            width:640
        }
        Button
        {
            id:_openTable
            Layout.row: 4
            Layout.column: 1
            text: "Просмотреть"
            onClicked:
            {
                var component = Qt.createComponent("table.qml");
                var window = component.createObject(_root);
                window.show();
            }
        }
        Button
        {
            Layout.row: 0
            Layout.column: 1
            text: "Записать"
            onClicked: addTask()
            function addTask()
            {
                var flag =  _dataorg.addTask(_taskName.text, _deadLine.text, _progress.text);
                _txt.visible = !flag;
                _txt2.text = "Кол.=" + _dataorg.getCount();
            }
        }
        Text {
            id: _txt
            Layout.row: 1
            Layout.column: 1
            text: qsTr("Неверные данные")
            visible: false
        }
        Text {
            id: _txt2
            Layout.row: 2
            Layout.column: 1
            text: "Кол.=" + _dataorg.getCount()
            visible: true
        }
    }
}
