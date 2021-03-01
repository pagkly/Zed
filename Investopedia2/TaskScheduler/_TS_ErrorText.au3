#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>

Global $iError, $iExtended

; *****************************************************************************
; Connect to the Task Scheduler Service of a computer that doesn't exist
; *****************************************************************************
_TS_ErrorNotify(2)
Global $oService = _TS_Open("Dummy-Computer")
If @error <> 0 Then
	$iError = @error
	$iExtended = @extended
	MsgBox($MB_ICONERROR, "Task Scheduler UDF - Full error information", "@error = " & $iError & ", @extended = 0x" & Hex($iExtended) & @CRLF & "============================" & @CRLF & @CRLF & _TS_ErrorText($iError))
EndIf

; *****************************************************************************
; Retrieve the message text for a HRESULT as returned by the Task Scheduler API.
; *****************************************************************************
$iError = 0x80041317 ; This returns an error message
MsgBox($MB_ICONERROR, "Task Scheduler UDF - Full error information", _TS_ErrorText($iError))
$iError = 0x00041301 ; This returns an success message
MsgBox($MB_ICONERROR, "Task Scheduler UDF - Full success information", _TS_ErrorText($iError, False))