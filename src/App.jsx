import React from "react";

const logoSrc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OTYuMzggMTY5LjA3Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMTcyZDY3OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMyZTczZWE7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjExLjI5LDQyLjA5Yy0yLjMzLTEuNDItNC44OS0yLjU1LTcuNzEtMy4zOS0yLjgxLS44NC01LjYyLTEuNTgtOC40My0yLjIzLTIuODEtLjY1LTUuMzgtMS4yOS03LjctMS45NC0yLjMzLS42NC00LjItMS41LTUuNjItMi41N3MtMi4xMy0yLjQ3LTIuMTMtNC4yMmMwLTEuNDkuNDItMi43OSwxLjI2LTMuOTMuODQtMS4xMywyLjIzLTIuMDUsNC4xNy0yLjc2LDEuOTQtLjcxLDQuNDMtMS4wNyw3LjQ2LTEuMDdzNi4xNC40NCw5LjMxLDEuMzFjMy4xNi44Nyw2LjMzLDIuMjEsOS41LDQuMDJsNC44NS0xMS45MmMtMy4xNy0yLTYuODItMy41LTEwLjk1LTQuNTEtNC4xNC0xLTguMzQtMS41LTEyLjYtMS41LTYuNCwwLTExLjcxLjk1LTE1Ljk0LDIuODYtNC4yMywxLjkxLTcuNCw0LjQ2LTkuNSw3LjY2LTIuMSwzLjItMy4xNSw2Ljc0LTMuMTUsMTAuNjEsMCwzLjYyLjczLDYuNTksMi4xOCw4LjkyLDEuNDUsMi4zMywzLjM1LDQuMiw1LjY3LDUuNjIsMi4zMywxLjQyLDQuOSwyLjU5LDcuNzEsMy40OSwyLjgxLjkxLDUuNjIsMS42Niw4LjQzLDIuMjgsMi44MS42Miw1LjM4LDEuMjYsNy43MSwxLjk0LDIuMzMuNjgsNC4yLDEuNTUsNS42MiwyLjYyLDEuNDIsMS4wNywyLjEzLDIuNTEsMi4xMyw0LjMxLDAsMS40Mi0uNDUsMi42OC0xLjM2LDMuNzgtLjkxLDEuMS0yLjMxLDEuOTUtNC4yMiwyLjU3LTEuOTEuNjEtNC40MS45Mi03LjUxLjkyLTQuMDcsMC04LjA5LS42Ni0xMi4wNy0xLjk5LTMuOTctMS4zMi03LjQxLTMuMDItMTAuMzItNS4wOWwtNS4zMywxMS44MmMzLjA0LDIuMzMsNy4wNCw0LjIyLDEyLjAyLDUuNjcsNC45OCwxLjQ1LDEwLjE4LDIuMTgsMTUuNjEsMi4xOCw2LjQ2LDAsMTEuODEtLjk3LDE2LjA0LTIuOTEsNC4yMy0xLjk0LDcuNDItNC40OSw5LjU1LTcuNjYsMi4xMy0zLjE3LDMuMi02LjY1LDMuMi0xMC40NywwLTMuNTUtLjczLTYuNDktMi4xOC04LjgyLTEuNDUtMi4zMy0zLjM0LTQuMi01LjY3LTUuNjJaIi8+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjU0LjMyIDc2LjQgMjY2LjQgNDQuMDEgMjc4LjA3IDc2LjQgMjkyLjcxIDc2LjQgMzExLjYxIDI0LjI2IDI5OC4yMyAyNC4yNiAyODUuNTYgNTkuNTkgMjczLjEzIDI0LjI2IDI2MC4zMyAyNC4yNiAyNDcuNTEgNTkuNTkgMjM1LjIzIDI0LjI2IDIyMC45OCAyNC4yNiAyMzkuNzggNzYuNCAyNTQuMzIgNzYuNCIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzI2LjI0LDE2Ljk5YzIuODQsMCw1LjEyLS44Miw2LjgzLTIuNDcsMS43MS0xLjY1LDIuNTctMy43MywyLjU3LTYuMjUsMC0yLjM5LS44Ny00LjM1LTIuNjItNS44Ni0xLjc1LTEuNTItNC4wMS0yLjI4LTYuNzktMi4yOHMtNS4wNC44MS02Ljc4LDIuNDJjLTEuNzQsMS42Mi0yLjYyLDMuNjItMi42Miw2LjAxcy44Nyw0LjM5LDIuNjIsNi4wMWMxLjc0LDEuNjIsNC4wMSwyLjQyLDYuNzgsMi40MloiLz4KICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMzE4LjY4IiB5PSIyNC4yNiIgd2lkdGg9IjE1LjEyIiBoZWlnaHQ9IjUyLjE1Ii8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MjMuMzIsNzMuODhsLTQuMDctMTAuNjZjLTEuNjgsMS4yOS0zLjcyLDEuOTQtNi4xMSwxLjk0LTIsMC0zLjU5LS42LTQuNzUtMS43OS0xLjE2LTEuMTktMS43NC0yLjg5LTEuNzQtNS4wOXYtMjEuMjNoMjQuNDVsNC42Ny0xMS42M2gtMjkuMTJ2LTEyLjdoLTE1LjEydjEyLjdoLTI3LjF2LTIuMjNjMC0yLjUyLjYtNC40MSwxLjc5LTUuNjcsMS4xOS0xLjI2LDIuODktMS44OSw1LjA5LTEuODksMS4xNiwwLDIuMjYuMTYsMy4zLjQ4LDEuMDMuMzIsMS45Ny43OCwyLjgxLDEuMzZsMy45Ny0xMC45NWMtMS40Mi0uOTctMy4xNS0xLjY4LTUuMTktMi4xMy0yLjA0LS40NS00LjE1LS42OC02LjM1LS42OC02LjQ2LDAtMTEuNDQsMS43Ni0xNC45Myw1LjI4LTMuNDksMy41Mi01LjIzLDguMjItNS4yMywxNC4xdjIuMzNoLTguMDR2MTEuNjNoOC4wNHYzOS4zNWgxNS4xMnYtMzkuMzVoMjYuNzF2MjEuNDJjMCw2LjIsMS43MSwxMC44Nyw1LjE0LDE0LjAxLDMuNDIsMy4xMyw4LjIxLDQuNywxNC4zNCw0LjcsMi4zMywwLDQuNTctLjI4LDYuNzQtLjgyLDIuMTYtLjU1LDQuMDItMS4zNyw1LjU3LTIuNDdaIi8+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDcxLjczIDUxLjY5IDUwMy41NSA1MS42OSA1MDMuNTUgMzkuMDkgNDcxLjczIDM5LjA5IDQ3MS43MyAyMS4xNSA1MDcuMyAyMS4xNSA1MDcuMyA4LjU1IDQ1Ni4wMyA4LjU1IDQ1Ni4wMyA3Ni40IDQ3MS43MyA3Ni40IDQ3MS43MyA1MS42OSIvPgogICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI1MTYuOSIgeT0iMjQuMjYiIHdpZHRoPSIxNS4xMiIgaGVpZ2h0PSI1Mi4xNSIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTI0LjQ2LDE2Ljk5YzIuODQsMCw1LjEyLS44Miw2LjgzLTIuNDcsMS43MS0xLjY1LDIuNTctMy43MywyLjU3LTYuMjUsMC0yLjM5LS44Ny00LjM1LTIuNjItNS44Ni0xLjc1LTEuNTItNC4wMS0yLjI4LTYuNzktMi4yOHMtNS4wNC44MS02Ljc4LDIuNDJjLTEuNzQsMS42Mi0yLjYyLDMuNjItMi42Miw2LjAxcy44Nyw0LjM5LDIuNjIsNi4wMWMxLjc0LDEuNjIsNC4wMSwyLjQyLDYuNzgsMi40MloiLz4KICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1OTYuMzggNzYuNCA1NzYuMiA0OS43NiA1OTUuNiAyNC4yNiA1NzkuNTEgMjQuMjYgNTY4LjE4IDM5LjQ5IDU1Ny4xMiAyNC4yNiA1NDAuMTYgMjQuMjYgNTU5LjU0IDUwLjEgNTM5LjQ4IDc2LjQgNTU1Ljk2IDc2LjQgNTY3LjggNjAuNDMgNTc5LjIyIDc2LjQgNTk2LjM4IDc2LjQiLz4KICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxODMuNzYgMTAwLjQyIDE2OC4wNiAxMDAuNDIgMTY4LjA2IDE2OC4yNyAyMTcuNzggMTY4LjI3IDIxNy43OCAxNTUuNDggMTgzLjc2IDE1NS40OCAxODMuNzYgMTAwLjQyIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjUuOSwxMTkuNmMtNC4yLTIuNTItOS4wNS0zLjkyLTE0LjUzLTQuMjEtNS41NS0uMjktMTAuNTMuNi0xNC45NCwyLjY2LTQuNDEsMi4wNy03Ljk3LDUuMDUtMTAuNjYsOC45NS0yLjcsMy45LTQuMTgsOC40Ny00LjQ2LDEzLjY5LS4yNyw1LjE2LjczLDkuODMsMywxMy45OSwyLjI3LDQuMTYsNS40OSw3LjUyLDkuNjYsMTAuMDdzOS4wMywzLjk3LDE0LjU4LDQuMjZjNS40OC4yOSwxMC40NS0uNjEsMTQuOS0yLjcxLDQuNDUtMi4xLDgtNS4wOSwxMC42Ny05LDIuNjYtMy45LDQuMTMtOC40NCw0LjQxLTEzLjYuMjgtNS4yOS0uNy0xMC0yLjk0LTE0LjEzLTIuMjQtNC4xMy01LjQ2LTcuNDUtOS42Ny05Ljk3Wk0yNjMuMjIsMTQyLjljLS4xNiwyLjk3LS44Nyw1LjUtMi4xNSw3LjYtMS4yNywyLjEtMi45NCwzLjY4LTUsNC43NC0yLjA2LDEuMDYtNC4zNSwxLjUyLTYuODcsMS4zOS0yLjUyLS4xMy00Ljc0LS44My02LjY4LTIuMS0xLjk0LTEuMjctMy40NS0zLjAxLTQuNTMtNS4yNC0xLjA4LTIuMjItMS41NC00LjgyLTEuMzktNy43OS4xNi0zLjAzLjg5LTUuNTgsMi4yLTcuNjUsMS4zLTIuMDcsMi45OS0zLjYzLDUuMDUtNC42OCwyLjA2LTEuMDYsNC4zNS0xLjUyLDYuODctMS4zOSwyLjUyLjEzLDQuNzQuODMsNi42OSwyLjEsMS45NCwxLjI3LDMuNDMsMyw0LjQ4LDUuMTksMS4wNSwyLjE5LDEuNDksNC44LDEuMzMsNy44NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzMC4yOSwxMTcuODJjLTMuMjctMS42NS02Ljk2LTIuNDctMTEuMS0yLjQ3LTQuNDYsMC04LjQzLjk0LTExLjkyLDIuODEtMi4wNiwxLjExLTMuODMsMi41LTUuMzMsNC4xN3YtNi4yMWgtMTQuNDR2NTIuMTVoMTUuMTJ2LTI1Ljc4YzAtMy4yMy41My01Ljg4LDEuNi03Ljk1LDEuMDctMi4wNywyLjU1LTMuNiw0LjQ2LTQuNiwxLjktMSw0LjA1LTEuNSw2LjQ1LTEuNSwzLjM2LDAsNS45NiwxLDcuOCwzLjAxLDEuODQsMiwyLjc2LDUuMTEsMi43Niw5LjN2MjcuNTNoMTUuMTJ2LTI5Ljg1YzAtNS4zLS45NC05LjY0LTIuODEtMTMuMDQtMS44Ny0zLjM5LTQuNDQtNS45MS03LjcxLTcuNTZaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zOTAuNTcsMTIxLjU4Yy0xLjItMS4zMi0yLjU1LTIuNDMtNC4wNy0zLjMyLTMuMy0xLjk0LTcuMTQtMi45MS0xMS41My0yLjkxLTQuOTEsMC05LjM0LDEuMS0xMy4yOCwzLjMtMy45NCwyLjItNy4wNiw1LjMtOS4zNSw5LjMxLTIuMjksNC4wMS0zLjQ0LDguNzYtMy40NCwxNC4yNXMxLjE1LDEwLjE1LDMuNDQsMTQuMTVjMi4yOSw0LjAxLDUuNDEsNy4xMiw5LjM1LDkuMzUsMy45NCwyLjIzLDguMzcsMy4zNCwxMy4yOCwzLjM0LDQuNTksMCw4LjUxLS45NywxMS43OC0yLjkxLDEuNzEtMS4wMiwzLjIxLTIuMzIsNC41MS0zLjl2Ni4wNGgxNC40NHYtNzEuOTJoLTE1LjEydjI1LjIzWk0zODkuMDcsMTQ5LjkxYy0xLjIsMi4xNy0yLjgsMy44My00LjgsNC45OS0yLDEuMTYtNC4yMywxLjc0LTYuNjksMS43NHMtNC43OC0uNTgtNi43OS0xLjc0Yy0yLTEuMTYtMy42LTIuODMtNC44LTQuOTktMS4yLTIuMTYtMS43OS00LjczLTEuNzktNy43MXMuNi01LjYyLDEuNzktNy43NWMxLjItMi4xMywyLjgtMy43OCw0LjgtNC45NCwyLTEuMTYsNC4yNi0xLjc0LDYuNzktMS43NHM0LjY4LjU4LDYuNjksMS43NGMyLDEuMTYsMy42LDIuODEsNC44LDQuOTQsMS4xOSwyLjEzLDEuNzksNC43MiwxLjc5LDcuNzVzLS42LDUuNTQtMS43OSw3LjcxWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDU4LjA2LDExOC43OWMtNC4zMy0yLjI5LTkuMjQtMy40NC0xNC43My0zLjQ0cy0xMC40OCwxLjE1LTE0Ljc4LDMuNDRjLTQuMywyLjI5LTcuNjksNS40Ni0xMC4xOCw5LjUtMi40OSw0LjA0LTMuNzMsOC42Ny0zLjczLDEzLjkxczEuMjQsOS43NywzLjczLDEzLjgxYzIuNDksNC4wNCw1Ljg4LDcuMjIsMTAuMTgsOS41NSw0LjMsMi4zMyw5LjIyLDMuNDksMTQuNzgsMy40OXMxMC40LTEuMTYsMTQuNzMtMy40OWM0LjMzLTIuMzMsNy43Mi01LjUxLDEwLjE4LTkuNTUsMi40NS00LjA0LDMuNjgtOC42NCwzLjY4LTEzLjgxcy0xLjIzLTkuOTUtMy42OC0xMy45NmMtMi40Ni00LjAxLTUuODUtNy4xNi0xMC4xOC05LjQ1Wk00NTQuODYsMTQ5LjkxYy0xLjE2LDIuMTctMi43NSwzLjgzLTQuNzUsNC45OS0yLDEuMTYtNC4yNywxLjc0LTYuNzksMS43NHMtNC43OC0uNTgtNi43OC0xLjc0Yy0yLTEuMTYtMy42LTIuODMtNC44LTQuOTktMS4yLTIuMTYtMS43OS00LjczLTEuNzktNy43MXMuNi01LjYyLDEuNzktNy43NWMxLjE5LTIuMTMsMi43OS0zLjc4LDQuOC00Ljk0LDItMS4xNiw0LjI2LTEuNzQsNi43OC0xLjc0czQuNzguNTgsNi43OSwxLjc0YzIsMS4xNiwzLjU5LDIuODEsNC43NSw0Ljk0LDEuMTYsMi4xMywxLjc0LDQuNzIsMS43NCw3Ljc1cy0uNTgsNS41NC0xLjc0LDcuNzFaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MjMuNDQsMTE3LjgyYy0zLjI2LTEuNjUtNi45Ni0yLjQ3LTExLjEtMi40Ny00LjQ2LDAtOC40My45NC0xMS45MiwyLjgxLTIuMDYsMS4xMS0zLjgzLDIuNS01LjMzLDQuMTd2LTYuMjFoLTE0LjQ0djUyLjE1aDE1LjEydi0yNS43OGMwLTMuMjMuNTMtNS44OCwxLjYtNy45NSwxLjA2LTIuMDcsMi41NS0zLjYsNC40Ni00LjYsMS45MS0xLDQuMDUtMS41LDYuNDUtMS41LDMuMzYsMCw1Ljk2LDEsNy44LDMuMDEsMS44NCwyLDIuNzYsNS4xMSwyLjc2LDkuM3YyNy41M2gxNS4xMnYtMjkuODVjMC01LjMtLjk0LTkuNjQtMi44MS0xMy4wNC0xLjg3LTMuMzktNC40NC01LjkxLTcuNzEtNy41NloiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTA4LjQsMTkuMTVDOTcuMTUsNy41Niw4MS40OC4yNyw2NC4wNSwwLDQ2LjYzLS4yNSwzMC43NSw2LjU4LDE5LjE1LDE3LjgzLDcuNTYsMjkuMDcuMjcsNDQuNzUsMCw2Mi4xOGMtLjIzLDE1LjYyLDUuMjMsMzAsMTQuNDcsNDEuMTZsMTktMjEuNTZjLTEwLjEtMTUuNDUtOS4xNC0zNi4zMSwzLjY2LTUwLjgzLDkuODItMTEuMTQsMjQuMjEtMTUuODQsMzcuODctMTMuNzguNTYuMDgsMS4xMS4xOCwxLjY2LjI5LjgzLjE2LDEuMTksMS4xNS42MywxLjc4bC0zMi4yLDM2LjUzYy0uMzcuNDItLjMzLDEuMDYuMDksMS40M2wyOC4wMywyNC43Yy40MS4zNywxLjA2LjMzLDEuNDMtLjA5bDMyLjItMzYuNTNjLjU1LS42MywxLjU5LS40MiwxLjg1LjM4LjE4LjU0LjM0LDEuMDkuNDksMS42MywzLjc1LDEzLjI5Ljg5LDI4LjE2LTguOTIsMzkuMjktMTIuOCwxNC41Mi0zMy4zNywxOC4xLTQ5Ljk3LDEwLjAxbC0yMS4xNSwyNGM4Ljg4LDExLjQ0LDE2LjY4LDIzLjcsMjMuNDksMzYuNWw1LjYsMTAuNTJjLjQ1Ljg1LDEuNjcuODcsMi4xNS4wM2wuODUtMS40OGMxMi4xLTIxLjIzLDI3LjQ5LTQwLjM1LDQ1LjIyLTU3LjE2LjIxLS4yLjQyLS40LjYyLS42LDExLjU5LTExLjI1LDE4Ljg5LTI2LjkzLDE5LjE1LTQ0LjM1cy02LjU3LTMzLjMxLTE3LjgyLTQ0LjlaTTY5LjA1LDcxLjE2bC0xMi42Ny0xMS4xOGMtLjUyLS40Ni0uNTctMS4yNC0uMTEtMS43NmwxLjM4LTEuNTZjLjQ2LS41MiwxLjI0LS41NywxLjc2LS4xMWwxMi42NywxMS4xOGMuNTIuNDYuNTcsMS4yNC4xMSwxLjc2bC0xLjM4LDEuNTZjLS40Ni41Mi0xLjI0LjU3LTEuNzYuMTFaIi8+Cjwvc3ZnPg==";

const areas = [
  "Ealing",
  "Chiswick",
  "Acton",
  "Hammersmith",
  "Wembley",
  "Perivale",
  "Park Royal",
  "Alperton",
];

const whatsappUrl =
  "https://wa.me/447345889002?text=Hi%2C%20please%20notify%20me%20when%20Swift%20Fix%20London%20launches.";
const emailUrl =
  "mailto:info@swiftfixlondon.co.uk?subject=Swift%20Fix%20London%20launch%20updates";

function WhatsAppIcon() {
  return <span aria-hidden="true">☏</span>;
}

function Logo() {
  return <img className="logoImage" src={logoSrc} alt="Swift Fix London" />;
}

export default function SwiftFixLondon() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #071733;
          background: #ffffff;
        }
        a { color: inherit; }

        .topbar {
          background: linear-gradient(90deg, #0036c9 0%, #075dff 100%);
          color: white;
          text-align: center;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: .05em;
          text-transform: uppercase;
        }

        .header {
          height: 104px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 34px;
          border-bottom: 1px solid #e8eef8;
          background: white;
        }

        .logoImage {
          width: 245px;
          height: auto;
          display: block;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .02em;
        }
        .nav a {
          text-decoration: none;
          color: #071733;
          white-space: nowrap;
        }
        .nav .cta {
          background: #075dff;
          color: white;
          padding: 15px 20px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 12px 28px rgba(7,93,255,.26);
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 72% 50%, rgba(7,93,255,.12), transparent 26%),
            linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border-bottom: 1px solid #e8eef8;
        }

        .hero:after {
          content: "LONDON";
          position: absolute;
          right: -20px;
          bottom: 65px;
          font-size: 110px;
          font-weight: 900;
          letter-spacing: -.08em;
          color: rgba(7,93,255,.045);
          transform: rotate(-90deg);
          transform-origin: right bottom;
          pointer-events: none;
        }

        .heroInner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 34px 70px;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 50px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #dbeafe;
          color: #075dff;
          padding: 11px 17px;
          border-radius: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 30px;
        }

        h1 {
          font-size: clamp(46px, 5.7vw, 76px);
          line-height: 1.04;
          letter-spacing: -0.065em;
          margin: 0 0 26px;
          color: #071733;
          max-width: 700px;
        }
        h1 span {
          color: #075dff;
          display: block;
        }

        .lead {
          font-size: 20px;
          line-height: 1.45;
          font-weight: 900;
          margin: 0 0 22px;
          max-width: 540px;
        }

        .copy {
          font-size: 18px;
          line-height: 1.65;
          color: #24324f;
          max-width: 540px;
          margin: 0 0 32px;
        }

        .actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .button {
          height: 58px;
          padding: 0 24px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .02em;
        }
        .primary {
          background: #075dff;
          color: white;
          box-shadow: 0 14px 30px rgba(7,93,255,.28);
        }
        .secondary {
          border: 1px solid #9bbdff;
          color: #075dff;
          background: white;
        }

        .note {
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
        }

        .heroVisual {
          min-height: 470px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 72% 42%, rgba(7,93,255,.22), transparent 30%),
            linear-gradient(135deg, #f7fbff 0%, #e8f2ff 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(7,93,255,.08);
        }

        .phoneBack,
        .phoneFront {
          position: absolute;
          background: linear-gradient(145deg, #11131a, #363b47);
          border: 9px solid #111;
          box-shadow: 0 30px 70px rgba(0,0,0,.30);
        }
        .phoneBack {
          width: 210px;
          height: 370px;
          border-radius: 38px;
          left: 132px;
          top: 54px;
          transform: rotate(-4deg);
        }
        .phoneFront {
          width: 230px;
          height: 400px;
          border-radius: 42px;
          right: 98px;
          top: 38px;
          background: linear-gradient(145deg, #050609, #1d2534);
        }
        .phoneFront:before {
          content: "";
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: 88px;
          height: 26px;
          border-radius: 20px;
          background: #050505;
        }
        .phoneFront:after {
          content: "";
          position: absolute;
          inset: 72px 22px 24px;
          border-radius: 30px;
          background:
            radial-gradient(circle at 70% 20%, rgba(255,255,255,.20), transparent 22%),
            linear-gradient(145deg, #08090d, #5e6877);
        }
        .camera {
          position: absolute;
          left: 30px;
          top: 28px;
          width: 95px;
          height: 95px;
          border-radius: 26px;
          background: rgba(0,0,0,.22);
        }
        .lens {
          position: absolute;
          width: 35px;
          height: 35px;
          border-radius: 999px;
          background: radial-gradient(circle, #1b2f57 10%, #07080a 55%, #1f2937 100%);
          border: 4px solid #222;
        }
        .lens.one { left: 12px; top: 12px; }
        .lens.two { right: 12px; top: 12px; }
        .lens.three { left: 30px; bottom: 10px; }

        .features, .areas {
          background: #f3f7ff;
          padding: 60px 34px;
        }

        .section {
          max-width: 1220px;
          margin: 0 auto;
        }

        .section h2 {
          text-align: center;
          margin: 0 0 34px;
          color: #071733;
          font-size: 27px;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        .section h2:after {
          content: "";
          display: block;
          width: 50px;
          height: 4px;
          border-radius: 4px;
          background: #075dff;
          margin: 11px auto 0;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .card {
          background: white;
          border: 1px solid #dbe7fb;
          border-radius: 18px;
          padding: 36px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(7,93,255,.08);
        }
        .icon {
          font-size: 44px;
          margin-bottom: 15px;
          color: #075dff;
        }
        .card h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          color: #334155;
          line-height: 1.6;
        }

        .areaGrid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 14px;
        }
        .area {
          background: white;
          border: 1px solid #dbe7fb;
          border-radius: 16px;
          padding: 22px 10px;
          text-align: center;
          font-weight: 900;
          box-shadow: 0 8px 24px rgba(7,93,255,.08);
        }
        .area span {
          display: block;
          color: #075dff;
          font-size: 31px;
          margin-bottom: 8px;
        }

        .contact {
          background: #071733;
          color: white;
          padding: 68px 34px;
        }
        .contactBox {
          max-width: 1220px;
          margin: 0 auto;
          background: linear-gradient(135deg, #071733, #041025);
          border-radius: 24px;
          padding: 42px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,.24);
          border: 1px solid rgba(255,255,255,.08);
        }
        .contactItem {
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.15);
          padding: 8px 12px;
        }
        .contactItem:last-child {
          border-right: none;
        }
        .contactIcon {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          background: #075dff;
          color: white;
          display: grid;
          place-items: center;
          margin: 0 auto 14px;
          font-size: 22px;
          box-shadow: 0 0 24px rgba(7,93,255,.5);
        }
        .contactItem b {
          display: block;
          color: white;
          font-size: 13px;
          text-transform: uppercase;
          margin-bottom: 9px;
        }
        .contactItem span {
          color: white;
          font-size: 18px;
          font-weight: 900;
        }
        .contactItem p {
          color: #cbd5e1;
          margin: 8px 0 0;
          font-size: 13px;
          line-height: 1.45;
        }

        .footer {
          background: #061126;
          color: white;
          padding: 44px 34px 26px;
        }
        .footerInner {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 34px;
        }
        .footer .logoImage {
          width: 210px;
          filter: brightness(0) invert(1);
        }
        .footer h4 {
          margin: 0 0 14px;
          font-size: 14px;
          text-transform: uppercase;
          color: white;
        }
        .footer a,
        .footer p {
          display: block;
          color: #cbd5e1;
          text-decoration: none;
          margin: 8px 0;
        }
        .copyright {
          max-width: 1220px;
          margin: 30px auto 0;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.14);
          text-align: center;
          color: #cbd5e1;
        }

        @media (max-width: 900px) {
          .topbar { font-size: 12px; }
          .nav a:not(.cta) { display: none; }
          .header { height: 86px; padding: 0 18px; }
          .logoImage { width: 175px; }
          .heroInner { grid-template-columns: 1fr; padding: 48px 20px; }
          .heroVisual { min-height: 340px; }
          .phoneBack { left: 72px; top: 42px; width: 155px; height: 275px; }
          .phoneFront { right: 65px; top: 30px; width: 170px; height: 295px; }
          .featureGrid,
          .contactBox,
          .footerInner { grid-template-columns: 1fr; }
          .areaGrid { grid-template-columns: repeat(2, 1fr); }
          .contactItem {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.15);
            padding: 20px 0;
          }
          .contactItem:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="topbar">🚀 Launching Soon · West London · Join the Waiting List</div>

      <header className="header">
        <Logo />
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#areas">Areas</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
          <a className="cta" href={whatsappUrl}>
            <WhatsAppIcon /> Notify Me
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div>
            <div className="badge">Launching Soon</div>
            <h1>
              West London’s Premium iPhone
              <span>Collection & Repair Service</span>
            </h1>
            <p className="lead">West London’s premium iPhone collection & repair service.</p>
            <p className="copy">
              We’re currently finalising our systems, testing processes and preparing for launch.
              Join our waiting list and we’ll notify you as soon as bookings open.
            </p>
            <div className="actions">
              <a className="button primary" href={whatsappUrl}>
                <WhatsAppIcon /> Notify Me on WhatsApp
              </a>
              <a className="button secondary" href={emailUrl}>✉️ Email Us</a>
            </div>
            <div className="note">🔒 No spam. We’ll only contact you for launch updates.</div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="phoneBack">
              <div className="camera">
                <span className="lens one" />
                <span className="lens two" />
                <span className="lens three" />
              </div>
            </div>
            <div className="phoneFront" />
          </div>
        </div>
      </section>

      <section className="features" id="how">
        <div className="section">
          <h2>Why Swift Fix London?</h2>
          <div className="featureGrid">
            <div className="card">
              <div className="icon">🚚</div>
              <h3>Collection & Return</h3>
              <p>We collect your device from your doorstep and return it fully repaired. Fast, safe and convenient.</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3>Fully Insured</h3>
              <p>Your device is fully insured while in transit and during the repair process.</p>
            </div>
            <div className="card">
              <div className="icon">✅</div>
              <h3>Warranty Included</h3>
              <p>All repairs come with a warranty for your peace of mind and long-term reliability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="areas" id="areas">
        <div className="section">
          <h2>Areas We Cover</h2>
          <div className="areaGrid">
            {areas.map((area) => (
              <div className="area" key={area}>
                <span>📍</span>
                {area}
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 26, color: "#071733", fontWeight: 700 }}>
            Don’t see your area? <a href={whatsappUrl} style={{ color: "#075dff" }}>Contact us</a> — we may still be able to help.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactBox">
          <div className="contactItem">
            <div className="contactIcon">☏</div>
            <b>WhatsApp</b>
            <span>07345 889002</span>
            <p>Chat with us on WhatsApp for the fastest response.</p>
          </div>
          <div className="contactItem">
            <div className="contactIcon">✉️</div>
            <b>Email</b>
            <span>info@swiftfixlondon.co.uk</span>
            <p>Send us an email and we’ll get back to you soon.</p>
          </div>
          <div className="contactItem">
            <div className="contactIcon">🌐</div>
            <b>Website</b>
            <span>swiftfixlondon.co.uk</span>
            <p>Visit our website for updates and more information.</p>
          </div>
          <div className="contactItem">
            <div className="contactIcon">🕘</div>
            <b>Hours</b>
            <span>Mon – Sat: 9:00 – 18:00</span>
            <p>We’ll be ready to serve you very soon.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div>
            <Logo />
            <p>West London’s premium iPhone collection & repair service.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#areas">Areas We Cover</a>
            <a href="#how">How It Works</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>Instagram — Coming Soon</p>
            <p>Google — Coming Soon</p>
          </div>
          <div>
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Warranty Policy</p>
          </div>
        </div>
        <div className="copyright">© Swift Fix London. All rights reserved.</div>
      </footer>
    </main>
  );
}
