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

``` json
{
    "id"   : ...,
    "type" : ...,
    "vars" : { ... },
    "next" : [ ... ],
    "help" : [ ... ]
}
```

- id :: unique identifier for this bar
- type :: category this bar belongs to
- vars :: derivative-specific things that the bar tracks
- next :: events that trigger once this bar (an event unto itself) completes
- help :: events whose progress would be increase when this event is complete

# Event types

- Timed events :: events that progress strictly based on time
- Probable events :: events that might trigger help stages and next stages (?)

Events *should* be interpolatable, ie. I should be able to simplify a chain of
events past a point in time and expect a reasonably accurate result
