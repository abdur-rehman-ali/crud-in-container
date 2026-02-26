import time
import random
from prometheus_client import Histogram

_service_duration = Histogram(
    "service_duration_seconds",
    "Duration of internal service operations",
    ["operation"],
)

def slow_operation(operation: str = "slow_service"):
    start = time.perf_counter()
    time.sleep(random.uniform(0.2, 2.0))
    duration = time.perf_counter() - start
    _service_duration.labels(operation=operation).observe(duration)
    return {"duration": duration}
