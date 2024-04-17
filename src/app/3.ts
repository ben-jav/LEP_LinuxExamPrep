    {
        id: 115,
        question: "What is the correct way to set the default systemd boot target to multi-user?",
        type: QuestionType.SingleChoice,
        options: [
        ["systemctl isolate multi-user.target", false],
        ["systemctl set-runlevel multi-user.target", false],
        ["systemctl set-boot multi-user.target", false],
        ["systemctl set-default multi-user.target", true],
        ["systemctl boot -p multi-user.target", false]
        ],
        answer: "systemctl set-default multi-user.target"
    }