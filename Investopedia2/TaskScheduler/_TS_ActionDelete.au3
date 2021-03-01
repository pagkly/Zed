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
; Delete all existing Actions
; *****************************************************************************
_TS_ActionDelete($oTaskDefinition, Default, Default, True)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "_TS_ActionDelete returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_ActionDelete", "All existing Actions for Task '" & $sName & "' have been deleted!")

; *****************************************************************************
; Add two actions with different IDs to the Task
; *****************************************************************************
Global $sID1 = "Action-1"
Global $sID2 = "Action-2"
Global $oAction1 = _TS_ActionCreate($oTaskDefinition, $TASK_ACTION_EXEC, $sID1)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "Creating the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
Global $oAction2 = _TS_ActionCreate($oTaskDefinition, $TASK_ACTION_EXEC, $sID2)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "Creating the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Set the Action properties for both Actions
; *****************************************************************************
Global $aProperties[] = ["ACTIONS|Path|Action-1"]
_TS_TaskPropertiesSet($oAction1, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "_TS_TaskPropertiesSet for the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
$aProperties[0] = "ACTIONS|Path|Action-2"
_TS_TaskPropertiesSet($oAction2, $aProperties)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "_TS_TaskPropertiesSet for the Action returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_ActionDelete", "Actions '" & $sID1 & "' and '" & $sID2 & "' for Task '" & $sName & "' have been created!")

; *****************************************************************************
; Delete the Action by ID
; *****************************************************************************
_TS_ActionDelete($oTaskDefinition, Default, $sID1)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "_TS_ActionDelete returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Update the Task
; *****************************************************************************
_TS_TaskRegister($oService, $sFolder, $sName, $oTaskDefinition, Default, Default, Default, $TASK_UPDATE)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_ActionDelete", "_TS_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

MsgBox($MB_ICONINFORMATION, "_TS_ActionDelete", "Action '" & $sID1 & "' for Task '" & $sName & "' has been deleted!")

_TS_Close()