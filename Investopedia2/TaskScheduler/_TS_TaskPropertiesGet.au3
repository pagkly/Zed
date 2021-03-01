#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>
#include <Array.au3>

Global $sTaskname = "\Microsoft\Windows\Device Information\Device"

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Get the property to check if the Task has been enabled - in user friendly format
; *****************************************************************************
Global $vTaskProperties = _TS_TaskPropertiesGet($oService, $sTaskname, 1, False, "TASK", "Enabled")
If Not @error Then
	; _ArrayDisplay($vTaskProperties, "_TS_TaskPropertiesGet - User friendly format")
	MsgBox($MB_ICONINFORMATION, "_TS_TaskPropertiesGet", "Value of property 'Enabled' in section 'TASK': " & $vTaskProperties)
Else
	MsgBox($MB_ICONERROR, "_TS_TaskPropertiesGet", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf

; *****************************************************************************
; Get all properties of the PRINCIPAL sub-object
; *****************************************************************************
$vTaskProperties = _TS_TaskPropertiesGet($oService, $sTaskname, 1, True, "PRINCIPAL")
If Not @error Then
	_ArrayDisplay($vTaskProperties, "_TS_TaskPropertiesGet")
Else
	MsgBox($MB_ICONERROR, "_TS_TaskPropertiesGet", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf

; *****************************************************************************
; List properties of a single Task - in the format used by _TS_TaskPropertiesSet
; *****************************************************************************
$vTaskProperties = _TS_TaskPropertiesGet($oService, $sTaskname, 2, True)
If Not @error Then
	_ArrayDisplay($vTaskProperties, "_TS_TaskPropertiesGet - format used by _TS_TaskProperiesSet")
Else
	MsgBox($MB_ICONERROR, "_TS_TaskPropertiesGet", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf

; *****************************************************************************
; List properties of a single Task - write the AutoIt array definition to the console
; Ignore properties without values
; *****************************************************************************
$vTaskProperties = _TS_TaskPropertiesGet($oService, $sTaskname, 3, True)
If Not @error Then
	MsgBox($MB_ICONINFORMATION, "_TS_TaskPropertiesGet", "AutoIt array definition has been written to the console")
Else
	MsgBox($MB_ICONERROR, "_TS_TaskPropertiesGet", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf

_TS_Close()