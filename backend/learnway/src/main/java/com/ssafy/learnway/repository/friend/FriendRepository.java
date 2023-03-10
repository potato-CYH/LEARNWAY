package com.ssafy.learnway.repository.friend;

import com.ssafy.learnway.domain.friend.Friend;
import com.ssafy.learnway.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface FriendRepository extends JpaRepository<Friend, Integer> {
    List<Friend> findAllByUserId(User user);
    List<Friend> findAllByFriendId(User friend);
    Friend findByUserIdAndFriendId(@Param("user_id") User userId, @Param("friend_id") User friendId);
    void deleteById(Integer relationId);
    int countByUserId(User user);
    int countByFriendId(User user);

}
