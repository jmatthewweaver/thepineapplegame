package com.iw.tpg.api.beans;

import com.iw.tpg.api.dto.UserInfo;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
@Data
public class CurrentUserBean {

    private UserInfo userInfo;

}
