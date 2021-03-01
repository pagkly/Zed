#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>

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
; Example 1
; Create task "Test_Logon" in folder "\Test" to run Notepad 2 minutes after
; the user logged on.
; *****************************************************************************
_TS_ErrorNotify(2)
Global $oTaskDefinition = _TS_Wrapper_TaskCreate($oService, "Test-Description", "Test-Doku" & @CRLF & "Line 2")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TaskCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_PrincipalSet($oTaskDefinition, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_PrincipalSet returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TriggerLogon($oTaskDefinition, 2, $sStartDateTime, $sEndDateTime)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TriggerLogon returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_ActionCreate($oTaskDefinition, "CMD")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_ActionCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TaskRegister($oService, "Test", "Test-Logon", $oTaskDefinition, Default, Default, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_Wrapper_TaskCreate", "Logon task successfully created!")

; *****************************************************************************
; Example 2
; Create task "Test-DateTime-Daily" in folder "\Test" to run Notepad every second day in
; the boundary defined by $sStartDateTime and $sEndDateTime
; *****************************************************************************
$oTaskDefinition = _TS_Wrapper_TaskCreate($oService, "Test-Description", "Test-Doku" & @CRLF & "Line 2")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TaskCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_PrincipalSet($oTaskDefinition, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_PrincipalSet returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TriggerDateTime($oTaskDefinition, $TASK_TRIGGER_DAILY, 0, 2, $sStartDateTime, $sEndDateTime)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "DateTime returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_ActionCreate($oTaskDefinition, "Notepad")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_ActionCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TaskRegister($oService, "Test", "Test-DateTime-Daily", $oTaskDefinition, Default, Default, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_Wrapper_TaskCreate", "DateTime-Daily task successfully created!")

; *****************************************************************************
; Example 3
; Create task "Test-DateTime-Weekly" in folder "\Test" to run Notepad every Monday in
; the boundary defined by $sStartDateTime and $sEndDateTime
; *****************************************************************************
$oTaskDefinition = _TS_Wrapper_TaskCreate($oService, "Test-Description", "Test-Doku" & @CRLF & "Line 2")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TaskCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_PrincipalSet($oTaskDefinition, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_PrincipalSet returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TriggerDateTime($oTaskDefinition, $TASK_TRIGGER_WEEKLY, 2, 1, $sStartDateTime, $sEndDateTime)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "DateTime returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_ActionCreate($oTaskDefinition, "Notepad")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_ActionCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TaskRegister($oService, "Test", "Test-DateTime-Weekly", $oTaskDefinition, Default, Default, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "", "_TS_Wrapper_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_Wrapper_TaskCreate", "DateTime-Weekly task successfully created!")
_TS_Close()

; *****************************************************************************
; Example 4
; Create task "Test-DateTime-Once" in folder "\Test" to run the calculator
; once at a specific time defined by $sStartDateTime and $sEndDateTime
; *****************************************************************************
$oTaskDefinition = _TS_Wrapper_TaskCreate($oService, "Test-Description", "Test-Doku" & @CRLF & "Line 2")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_TaskCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_PrincipalSet($oTaskDefinition, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_PrincipalSet returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TriggerDateTime($oTaskDefinition, $TASK_TRIGGER_TIME, 0, 0, $sStartDateTime)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "DateTime returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_ActionCreate($oTaskDefinition, "Calc.exe")
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Wrapper_TaskCreate", "_TS_Wrapper_ActionCreate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_TS_Wrapper_TaskRegister($oService, "Test", "Test-DateTime-Once", $oTaskDefinition, Default, Default, $TASK_LOGON_INTERACTIVE_TOKEN)
If @error Then Exit MsgBox($MB_ICONERROR, "", "_TS_Wrapper_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_Wrapper_TaskCreate", "DateTime-Once task successfully created!")
_TS_Close()