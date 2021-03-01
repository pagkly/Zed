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
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

Global $oTask = _TS_TaskGet($oService, $sFolder & "\" & $sName)
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error retrieving the specified Task. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
Global $oTaskDefinition = $oTask.Definition

; *****************************************************************************
; Add a new action to the existing Task
; *****************************************************************************
Global $oAction = _TS_ActionCreate($oTaskDefinition, $TASK_ACTION_EXEC, "Action " & @YEAR & "-" & @MON & "-"  & @MDAY & " " & @HOUR  & ":" & @MIN & ":" & @SEC)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskActionCreate", "Creating the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Set the Action properties
; *****************************************************************************
Global $aProperties[] = ["ACTIONS|Path|notepad"]
_TS_TaskPropertiesSet($oAction, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskActionCreate", "_TS_TaskPropertiesSet for the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Update the Task
; *****************************************************************************
_TS_TaskRegister($oService, $sFolder, $sName, $oTaskDefinition, Default, Default, Default, $TASK_UPDATE)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskActionCreate", "_TS_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_TaskActionCreate", "New Action for Task '" & $sName & "' has been created!")

_TS_Close()