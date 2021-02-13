package group4.EduFree.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import group4.EduFree.userdetails.EduFreeUserDetailsService;

@EnableWebSecurity
public class SecurityConfigurations extends WebSecurityConfigurerAdapter {
	
	@Autowired
	EduFreeUserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().disable();
		http.csrf().disable();
		http.authorizeRequests()
			.antMatchers("/admin").hasRole("ADMIN")
			.antMatchers("/user").hasAnyRole("ADMIN", "USER")
			.antMatchers("/login").permitAll()
			.antMatchers("/register").permitAll()
			.antMatchers("/register/{id}").permitAll()
			.antMatchers("/uploadFile").permitAll()
			.antMatchers("/getContent").permitAll()
			.antMatchers("/downloadFile/{fileName:.+}").permitAll()
			.antMatchers("/**").permitAll()
			.anyRequest().authenticated();
	}
	
	@Bean
	public PasswordEncoder getPaswordEncoder() { return NoOpPasswordEncoder.getInstance(); }
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
}
