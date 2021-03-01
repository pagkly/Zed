#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>
#include <Array.au3>

Global $sTaskPath = "\Test\Test-Task"

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Create a new task with a lot of errors
; *****************************************************************************
; Create the Task Definition object
Global $oTaskDefinition = _TS_TaskCreate($oService)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValdiate", "_TS_TaskCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; Set all task properties
Global $aProperties[] = [ _
		"ACTIONS|ID|Test-Action 1", _
		"TRIGGERS|Enabled|True", _
		"TRIGGERS|Type|" & $TASK_TRIGGER_LOGON, _
		"TRIGGERS|UserId|" & @UserName _
		]
_TS_TaskPropertiesSet($oTaskDefinition, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValidate", "_TS_TaskPropertiesSet for the TaskDefinition returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

#cs
; Create a Logon trigger
Global $oTrigger = _TS_TriggerCreate($oTaskDefinition, $TASK_TRIGGER_LOGON, "Test-Trigger1")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValidate", "Creating the Trigger returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_TaskPropertiesSet($oTrigger, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValidate", "_TS_TaskPropertiesSet for the Trigger returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
#ce

; Create an Action
Global $oAction = _TS_ActionCreate($oTaskDefinition, $TASK_ACTION_SEND_EMAIL)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValidate", "Creating the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_TaskPropertiesSet($oAction, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValidate", "_TS_TaskPropertiesSet for the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Validate the Task
; *****************************************************************************
Global $aCheck = _TS_TaskValidate($oService, $oTaskDefinition)
 If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskValidate", "_TS_TaskValidate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_ArrayDisplay($aCheck, Default, Default, Default, Default, "ErrorNumber|Severity|ErrorText|ObjectType|ObjectID|ObjectIndex|Comment")

_TS_Close()