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
; Delete all existing Triggers
; *****************************************************************************
_TS_TriggerDelete($oTaskDefinition, Default, Default, True)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TriggerDelete", "_TS_TriggerDelete returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_TriggerDelete", "All existing Triggers for Task '" & $sName & "' have been deleted!")

; *****************************************************************************
; Add a Trigger to the Task
; *****************************************************************************
Global $sID1 = "Trigger-1"
Global $oTrigger1 = _TS_TriggerCreate($oTaskDefinition, $TASK_TRIGGER_LOGON, $sID1)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TriggerDelete", "Creating the Trigger returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Set the Trigger properties
; *****************************************************************************
; Set properties for the Trigger
Global $aProperties[] = ["TRIGGERS|Enabled|True", "TRIGGERS|UserId|" & @UserName]

_TS_TaskPropertiesSet($oTrigger1, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TriggerDelete", "_TS_TaskPropertiesSet for the Trigger returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_TriggerDelete", "Trigger '" & $sID1 & "' for Task '" & $sName & "' has been created!")

; *****************************************************************************
; Delete the Trigger by ID
; *****************************************************************************
_TS_TriggerDelete($oTaskDefinition, Default, $sID1)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TriggerDelete", "_TS_TriggerDelete returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Update the Task
; *****************************************************************************
_TS_TaskRegister($oService, $sFolder, $sName, $oTaskDefinition, Default, Default, Default, $TASK_UPDATE)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TriggerDelete", "_TS_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

MsgBox($MB_ICONINFORMATION, "_TS_TriggerDelete", "Trigger '" & $sID1 & "' for Task '" & $sName & "' has been deleted!")

_TS_Close()