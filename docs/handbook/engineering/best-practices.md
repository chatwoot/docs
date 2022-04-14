---
title: "Best Practices & Guidelines"
---

### Logging

Logging is a critical part of application development which help us to understand application behaviour and aid in debugging when things go wrong.

Please make sure to specify the appropriate log level based on importance. This will help us in reducing log volumes as well as improve the visualizations.

From https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html


| Level    | Description                                                 |
| ---------| ----------------------------------------------------------- |
| `DEBUG`  | Low-level information for developers.                       |
| `INFO`   | Generic (useful) information about system operation.        |
| `WARN`   | A warning.                                                  |
| `ERROR`  | A handleable error condition.                               |
| `FATAL`  | An unhandleable error that results in a program crash.      |
| `UNKNOWN`| An unknown message that should always be logged.            |

> **Note** Avoid logging everything as `INFO`.
