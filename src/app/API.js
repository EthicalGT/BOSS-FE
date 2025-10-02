const addr = "http://127.0.0.1:2400";
export const SignUpHandler = async (data) => {
    const response = await fetch(`${addr}/signup_step_i`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    const rs = await response.json();

    if (response.ok && rs.status == "success") {
        alert(rs.msg);
    } else {
        alert('Unable to connect with the backend please try again later!!!');
    }

    if (!response.ok) {
        alert('Network issue arised please try again later.');
    }
    return rs;

}

export const SignInHandler = async (data) => {
    const response = await fetch(`${addr}/signin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(data),
    });

    const rs = await response.json();

    if (response.ok && rs.status == "success") {
        alert(rs.msg);
    } else {
        alert('Unable to connect with the backend please try again later!!!');
    }

    if (!response.ok) {
        alert('Network issue arised please try again later.');
    }
    return rs;

}