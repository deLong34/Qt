import QtQuick 2.15
import QtQuick.Window 2.15
import QtQuick.Controls 2.5
import com.vv.filectrl
import "C:/gb/Qt/lesson9/lesson9/CustomButton.qml"
import "C:/gb/Qt/lesson9/lesson9//MessageDialog.qml"

Window {
    id: root
    width: 640
    height: 480
    visible: true
    title: qsTr("Task Manager")

    property string taskname_: qtaskname.text
    property string deadline_: qdeadline.text
    property int progress_: qprogress.value
    property int count_: 0

    MessageDialog
    {
        id: info
    }

    TextEdit
    {
        id: qtaskname
        width: 240
        font.family: "Arial"
        font.pixelSize: 14
        text: "Enter task name"
        focus: true
        textMargin: 5
    }

    TextInput
    {
        id: qdeadline
        width: 240
        anchors.top: qtaskname.bottom
        text: "dd.mm.yyyy"
        validator: RegularExpressionValidator
        {
            regularExpression: /^(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
        }
    }

    TextEdit
    {
        id: qcount
        text: "Tasks num: 0"
        readOnly: false
        font.pixelSize: 20
        anchors.left: qtaskname.right
        anchors.leftMargin: 40
    }

    Slider
    {
        id: qprogress
        from: 0
        stepSize: 1
        to: 10
        anchors.top: qdeadline.bottom
        anchors.topMargin: 5
    }

    CustomButton
    {
        id: save
        text: "Save"
        onClicked:
        {
            taskname_ = qtaskname.text;
            deadline_ = qdeadline.text;
            progress_ = qprogress.value;
            if (taskname_.length == 0 || "Enter task name" == taskname_)
            {
                info.setInfo("Warning", "Please, enter task name");
                info.show();
                return;
            }
            if (deadline_.length < 10 || deadline_ == "dd.mm.yyyy")
            {
               info.setInfo("Warning", "Please, enter date in format dd.mm.yyyy");
               info.show();
               return;
            }
            qcount.remove(11, qcount.length);
            qcount.insert(11, ++count_);
            filectrl.saveData(taskname_, deadline_, progress_);
        }
        anchors.top: qprogress.bottom
        anchors.topMargin: 5
    }

    CustomButton
    {
        id: load
        text: "Load task"
        onClicked:
        {
            filectrl.getNextTask();
        }
        anchors.top: qprogress.bottom
        anchors.left: save.right
        anchors.topMargin: 5
        anchors.leftMargin: 5
    }

    FileController
    {
        id: filectrl
        onInitEnd:
        {
            count_ = count;
            qcount.remove(11, qcount.length);
            qcount.insert(11,count);
        }
    }
}
