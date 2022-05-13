package com.school.covid;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.school.covid.mapper")
@SpringBootApplication
public class DemoSchoolCovidApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoSchoolCovidApplication.class, args);
    }

}
