package com.ssafy.learnway.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.time.Duration;

@RequiredArgsConstructor
@Service
@Slf4j
public class RedisUtil {
    private final StringRedisTemplate stringRedisTemplate;

    // key를 통해 value 리턴
    public String getData(String key) {
        ValueOperations<String, String> valueOperations = stringRedisTemplate.opsForValue();
        return valueOperations.get(key);
    }

    // 유효 시간 동안(key, value)저장
    public void setDataExpire(String key, String value, long duration) {
        ValueOperations<String, String> valueOperations = stringRedisTemplate.opsForValue();
        Duration expireDuration = Duration.ofSeconds(duration);
        valueOperations.set(key, value, expireDuration);
    }

    public void deleteData(String key) {
        stringRedisTemplate.delete(key);
    }

    public boolean checkAuth(String email,String value) {
        ValueOperations<String, String> valueOperations = stringRedisTemplate.opsForValue();
        String authK = valueOperations.get(email);
        if (authK.equals(value)) return true;
        return false;
    }
}