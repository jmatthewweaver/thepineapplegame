package com.iw.tpg.api.filters;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.iw.tpg.api.beans.CurrentUserBean;
import com.iw.tpg.api.dto.UserInfo;
import com.iw.tpg.core.service.GoogleAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.GeneralSecurityException;

@WebFilter("/*")
@Component
public class AuthenticationFilter implements Filter {

    @Autowired
    private GoogleAuthService googleAuthService;

    @Autowired
    private CurrentUserBean currentUserBean;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;

        String authScheme = req.getHeader("Authentication-Scheme");
        String authToken = req.getHeader("Authentication-Token");

        if("google".equals(authScheme)) {
            try {
                GoogleIdToken token = googleAuthService.verifyTextToken(authToken);
                if(token == null) {
                    res.setStatus(HttpServletResponse.SC_FORBIDDEN);
                } else {
                    UserInfo userInfo = new UserInfo();
                    GoogleIdToken.Payload payload = token.getPayload();

                    userInfo.setName((String) payload.get("name"));
                    userInfo.setEmail((String) payload.get("email"));
                    userInfo.setImageUrl((String) payload.get("picture"));

                    currentUserBean.setUserInfo(userInfo);
                    filterChain.doFilter(req, res);
                }
            } catch (GeneralSecurityException e) {
                res.setStatus(HttpServletResponse.SC_FORBIDDEN);
            }
        } else {
            res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    @Override
    public void destroy() {
    }
}
