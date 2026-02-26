from opentelemetry.metrics import get_meter

_meter = get_meter("simple_crud.backend", "0.1.0")

service_duration_histogram = _meter.create_histogram(
    name="service_duration_seconds",
    unit="s",
    description="Duration of internal service operations",
)

def record_service_duration(operation: str, seconds: float):
    service_duration_histogram.record(seconds, {"operation": operation})
