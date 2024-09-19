package com.gearshift.dto;

import java.util.List;

public record PageDto<T>(List<T> data, int page) {
}
