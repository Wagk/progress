# PROGRESS

A game about progress bars filling up.

Progress bars in this case is probably analogous to functions

# What do I want progress functions to do

- Take time to fill up
- variable caps
- On filling up, trigger an event (which is one or more progress functions)
    - One bar can spawn multiple bars
    - Multiple bars can, on completion, cause one bar to start

# Serialization Syntax

```
{
    "id" : ...
    "vars" : { ... },
    "next" : [ ... ]
}
```
