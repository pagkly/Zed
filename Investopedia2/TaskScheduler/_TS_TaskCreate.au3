#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>
#include <Array.au3>

Global $sFolder = "\Test"    ; Folder where to create the task
Global $sName = "Test-Task"  ; Name of the task to create
; *****************************************************************************
; Prepare start and end date of the trigger. Format must be YYYY-MM-DDTHH:MM:SS
; *****************************************************************************
Global $sStartDateTime = _DateAdd("n", 2, _NowCalc())
$sStartDateTime = StringReplace($sStartDateTime, "/", "-")
$sStartDateTime = StringReplace($sStartDateTime, " ", "T")
Global $sEndDateTime = _DateAdd("M", 4, _NowCalc())
$sEndDateTime = StringReplace($sEndDateTime, "/", "-")
$sEndDateTime = StringReplace($sEndDateTime, " ", "T")

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Delete a task in the same folder with the same name
; *****************************************************************************
_TS_TaskDelete($oService, $sFolder & "\" & $sName)
; If @error <> 0 And @error <> 2 Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "_TS_TaskDelete returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Create a new task
; *****************************************************************************
; Create the Task Definition object
Global $oTaskDefinition = _TS_TaskCreate($oService)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "_TS_TaskCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; Set all task properties
Global $aProperties[] = [ _
		"ACTIONS|Path|notepad", _
		"TRIGGERS|Enabled|True", _
		"TRIGGERS|Type|" & $TASK_TRIGGER_LOGON, _
		"TRIGGERS|UserId|" & @UserName _
		]
_TS_TaskPropertiesSet($oTaskDefinition, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "_TS_TaskPropertiesSet for the TaskDefinition returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; Create a Logon trigger
Global $oTrigger = _TS_TriggerCreate($oTaskDefinition, $TASK_TRIGGER_LOGON, "Test-Trigger1")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "Creating the Trigger returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_TaskPropertiesSet($oTrigger, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "_TS_TaskPropertiesSet for the Trigger returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; Create an Action
Global $oAction = _TS_ActionCreate($oTaskDefinition, $TASK_ACTION_EXEC, "Test-Action1")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "Creating the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_TaskPropertiesSet($oAction, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "_TS_TaskPropertiesSet for the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; List properties of the Task Definition
Global $aTaskProperties = _TS_TaskPropertiesGet($oService, $oTaskDefinition,1 , True)
If Not @error Then
	_ArrayDisplay($aTaskProperties, "Properties of the task to be created")
Else
	MsgBox($MB_ICONERROR, "_TS_TaskPropertiesGet", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf

; Register the task
Global $oTask = _TS_TaskRegister($oService, $sFolder, $sName, $oTaskDefinition)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCreate", "_TS_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_TaskCreate", "Task " & $sName & " has been created!")

_TS_Close()