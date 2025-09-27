<template>
    <div id="main-content">
        <div id="gbl-body">
            <div class="signup_content" id="sign_up">
                <h1>新規会員登録</h1>
                <div id="registration-form">
                    <form action="signup" method="post" accept-charset="utf-8">
                        <input type="hidden" name="authenticity_token" value="TODO: CSRF token" />
                        <ul>
                            <li>
                                <p class="label_wear_id">WEAR ID</p>
                                <input autofocus type="text" placeholder="例: wear_user"
                                    name="web_member_form[user_name]" id="web_member_form_user_name" />
                                <p class="notes"><span>※WEAR ID</span>は登録後変更できません</p>
                            </li>
                            <li>
                                <p class="label">名前</p>
                                <p>
                                    <input type="text" placeholder="例: 山田 太郎" name="web_member_form[nick_name]"
                                        id="web_member_form_nick_name" />
                                </p>
                            </li>
                            <li>
                                <p class="label">メール</p>
                                <input type="text" placeholder="例: example@gmail.com"
                                    name="web_member_form[email_address]" id="web_member_form_email_address" />
                            </li>
                            <li>
                                <p class="label">パスワード</p>
                                <input type="password" placeholder="パスワードを入力" name="web_member_form[password]"
                                    id="web_member_form_password" />
                            </li>
                        </ul>
                        <div class="agreements_container">
                            <div class="agreements">
                                <p class="agreement">
                                    <span class="check_box_tag">
                                        <input type="checkbox" name="is_receive_mail_magazine"
                                            id="is_receive_mail_magazine" v-model="isReceiveMailMagazine" />
                                    </span>
                                    <span class="label">
                                        メールマガジンを受け取る
                                    </span>
                                </p>

                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Track newsletter opt-in so we can send boolean state or map to API payload later.
const isReceiveMailMagazine = ref(true)
</script>

<style scoped>
#main-content {
    background: #f1f3f6;
    min-height: calc(100vh - 120px);
    padding: 80px 16px;
    display: flex;
    justify-content: center;
}

#gbl-body {
    width: 100%;
    max-width: 520px;
}

/* 外層不要再有額外的白底/陰影 */
.signup_content {
    background: transparent;
    box-shadow: none;
    padding: 0;
}

/* 真正的卡片放在 form wrapper 上 */
#registration-form {
    border-radius: 16px;
    padding: 42px 48px 48px;
    box-shadow: 0 30px 60px rgba(7, 16, 28, 0.08);
}

#registration-form h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 28px;
}

/* 讓 label / input 變成兩欄 */
#registration-form ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 18px;
}

#registration-form li {
    display: grid;
    grid-template-columns: 120px 1fr;
    column-gap: 24px;
    align-items: center;
}

#registration-form li .label,
#registration-form li .label_wear_id {
    font-size: 14px;
    color: #333;
    font-weight: 600;
    margin: 0;
    justify-self: start;
}

#registration-form li .notes {
    grid-column: 2 / 3;
    margin-top: 6px;
    font-size: 12px;
    color: #9c9c9c;
}

/* 輸入框去掉外框線，使用內陰影 */
#registration-form input[type='text'],
#registration-form input[type='password'] {
    background: #f7f7f7;
    border: none;
    box-shadow: inset 0 0 0 1px #e3e3e3;
    border-radius: 12px;
    height: 48px;
    padding: 0 16px;
    font-size: 15px;
    transition: box-shadow 0.2s ease, background 0.2s ease;
}

#registration-form input[type='text']:focus,
#registration-form input[type='password']:focus {
    outline: none;
    background: #fff;
    box-shadow: inset 0 0 0 1px #5fa6ff, 0 0 0 3px rgba(95, 166, 255, 0.2);
}

/* checkbox 區塊仍可沿用原本的樣式 */
.agreements_container {
    border-top: 1px solid #e9ebf0;
    margin-top: 28px;
    padding-top: 24px;
}
</style>