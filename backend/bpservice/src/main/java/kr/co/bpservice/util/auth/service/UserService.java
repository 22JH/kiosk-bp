package kr.co.bpservice.util.auth.service;


import kr.co.bpservice.entity.user.User;
import kr.co.bpservice.util.auth.config.SecurityUtil;
import kr.co.bpservice.util.auth.dto.UserResponseDto;
import kr.co.bpservice.util.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponseDto getMyInfoBySecurity() {
        return userRepository.findById(SecurityUtil.getCurrentUserId())
                .map(UserResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    }

//    @Transactional
//    public UserResponseDto changeUserNickname(String email, String nickname) {
//        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
//        user.setNickname(nickname);
//        return UserResponseDto.of(userRepository.save(user));
//    }

    @Transactional
    public UserResponseDto changeUserPassword(String id, String exPassword, String newPassword) {
        User user = userRepository.findById(SecurityUtil.getCurrentUserId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        if (!passwordEncoder.matches(exPassword, user.getPwd())) {
            throw new RuntimeException("비밀번호가 맞지 않습니다");
        }
        user.setPwd(passwordEncoder.encode((newPassword)));
        return UserResponseDto.of(userRepository.save(user));
    }
}