// mock-data.ts

import { Question } from "./Question";
import { QuestionType } from "./enums";

export const mockQuestions : Question[] = [
    {
      id: 1,
      question: 'Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?',
      type: QuestionType.SingleChoice,
      options: [['XFS', false], ['VFAT', false], ['ext2', true], ['ext3', false], ['ext4', false]],
      answer: 'ext2'
    },
    {
      id: 2,
      question: 'Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group, and are not accessible at all for everyone else?',
      type: QuestionType.SingleChoice,
      options: [['0750', false], ['0027', true], ['0036', false], ['7640', false], ['0029', false]],
      answer: '0027'
    },
    {
        id: 3,
        question: 'Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?',
        type: QuestionType.SingleChoice,
        options: [['tune2fs -d 200 /dev/sda1', false], ['tune2fs -i 200 /dev/sda1', true], ['tune2fs -c 200 /dev/sda1', false], ['tune2fs -n 200 /dev/sda1', false], ['tune2fs --days 200 /dev/sda1', false]],
        answer: 'tune2fs -i 200 /dev/sda1'
    },
    {
        id: 4,
        question: 'Which is the default percentage of reserved space for the root user on new ext4 filesystems?',
        type: QuestionType.SingleChoice,
        options: [['10%', false], ['3%', false], ['15%', false], ['0%', false], ['5%', true]],
        answer: '5%'
    },
    {
        id: 5,
        question: 'Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?',
        type: QuestionType.SingleChoice,
        options: [['systemd ignores any manual mounts which are not done using the systemctl mount command', false], ['The command systemctl mountsync can be used to create a mount unit based on the existing mount', false], ['systemd automatically generates a mount unit and monitors the mount point without changing it', true], ['Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time', false], ['systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point', false]],
        answer: 'systemd automatically generates a mount unit and monitors the mount point without changing it'
    },
    {
        id: 6,
        question: 'Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).',
        type: QuestionType.FillIn,
        answer: 'updatedb'
    },
    {
        id: 7,
        question: 'What does the command mount --bind do?',
        type: QuestionType.SingleChoice,
        options: [['It makes the contents of one directory available in another directory', true], ['It mounts all available filesystems to the current directory', false], ['It mounts all user mountable filesystems to the user’s home directory', false], ['It mounts all file systems listed in /etc/fstab which have the option userbindset', false], ['It permanently mounts a regular file to a directory', false]],
        answer: 'It makes the contents of one directory available in another directory'
    },
    {
        id: 8,
        question: 'Consider the following output from the command ls -i: \n 525385 a.txt \n How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?',
        type: QuestionType.SingleChoice,
        options: [['ln -h a.txt c.txt', false], ['ln c.txt a.txt', false], ['ln a.txt c.txt', true], ['ln -f c.txt a.txt', false], ['ln -i 525385 c.txt', false]],
        answer: 'ln a.txt c.txt'
    },
    {
        id: 9,
        question: 'Consider the following directory: \n  drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales  \n  Which command ensures new files created within the directory sales are owned by the group sales?  \n  (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [['chmod g+s sales', true], ['setpol -R newgroup=sales sales', false], ['chgrp -p sales sales', false], ['chown --persistent *.sales sales', false], ['chmod 2775 sales', true]],
        answer: ['chmod g+s sales', 'chmod 2775 sales']
    },
    {
        id: 10,
        question: 'In order to display all currently mounted filesystems, which of the following commands could be used?  \n  (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [['cat /proc/self/mounts', true], ['free', false], ['lsmounts', false], ['mount', true], ['cat /proc/filesystems', false]],
        answer: ['cat /proc/self/mounts', 'mount']
    },
    {
        id: 11,
        question: 'Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)',
        type: QuestionType.FillIn,
        answer: 'df'
      },
      {
        id: 12,
        question: 'Which chown command changes the ownership to dave and the group to staff on a file named data.txt?',
        type: QuestionType.SingleChoice,
        options: [['chown dave/staff data.txt', false], ['chown -u dave -g staff data.txt', false], ['chown --user dave --group staff data.txt', false], ['chown dave+staff data.txt', false], ['chown dave:staff data.txt', true]],
        answer: 'chown dave:staff data.txt'
      },
      {
        id: 13,
        question: 'When considering the use of hard links, what are valid reasons not to use hard links?',
        type: QuestionType.SingleChoice,
        options: [
          ['Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them', false],
          ['Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content', false],
          ['Hard links are specific to one filesystem and cannot point to files on another filesystem', true],
          ['If users other than root should be able to create hard links, suln has to be installed and configured', false],
          ['When a hard linked file is changed, a copy of the file is created and consumes additional space', false]
        ],
        answer: 'Hard links are specific to one filesystem and cannot point to files on another filesystem'
      },
      {
        id: 14,
        question: 'In compliance with the FHS, in which of the directories are man pages found?',
        type: QuestionType.SingleChoice,
        options: [['/opt/man/', false], ['/usr/doc/', false], ['/usr/share/man/', true], ['/var/pkg/man', false], ['/var/man/', false]],
        answer: '/usr/share/man/'
      },
      {
        id: 15,
        question: 'Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)',
        type: QuestionType.FillIn,
        answer: 'cmdline'
      },
      {
        id: 16,
        question: 'What is the process ID number of the init process on a System V init based system?',
        type: QuestionType.SingleChoice,
        options: [
          ['-1', false],
          ['0', false],
          ['1', true],
          ['It is different with each reboot', false],
          ['It is set to the current run level', false]
        ],
        answer: '1'
      },
      {
        id: 17,
        question: 'Which daemon handles power management events on a Linux system?',
        type: QuestionType.SingleChoice,
        options: [['acpid', true], ['batteryd', false], ['pwrmgntd', false], ['psd', false], ['inetd', false]],
        answer: 'acpid'
      },
      {
        id: 18,
        question: 'Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['Some parts of the boot process can be configured from the BIOS', true],
          ['Linux does not require the assistance of the BIOS to boot a computer', false],
          ['The BIOS boot process starts only if secondary storage, such as the hard disk, is functional', false],
          ['The BIOS initiates the boot process after turning the computer on', true],
          ['The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk', false]
        ],
        answer: ['Some parts of the boot process can be configured from the BIOS', 'The BIOS initiates the boot process after turning the computer on']
      },
      {
        id: 19,
        question: 'What is true regarding UEFI firmware? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['It can read and interpret partition tables', true],
          ['It can use and read certain file systems', true],
          ['It stores its entire configuration on the /boot/ partition', false],
          ['It is stored in a special area within the GPT metadata', false],
          ['It is loaded from a fixed boot disk position', false]
        ],
        answer: ['It can read and interpret partition tables', 'It can use and read certain file systems']
      },
      {
        id: 20,
        question: 'A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?',
        type: QuestionType.SingleChoice,
        options: [
          ['Using lsmod --remove --autoclean without specifying the name of a specific module', false],
          ['Using modinfo -k followed by the name of the offending module', false],
          ['Using modprobe -r followed by the name of the offending module', false],
          ['Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf', true],
          ['Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules', false]
        ],
        answer: 'Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf'
      },
      {
        id: 21,
        question: 'When is the content of the kernel ring buffer reset? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['When the ring buffer is explicitly reset using the command dmesg --clear', true],
          ['When the ring buffer is read using dmesg without any additional parameters', false],
          ['When a configurable amount of time, 15 minutes by default, has passed', false],
          ['When the kernel loads a previously unloaded kernel module', false],
          ['When the system is shut down or rebooted', true]
        ],
        answer: ['When the ring buffer is explicitly reset using the command dmesg --clear', 'When the system is shut down or rebooted']
      },
      {
        id: 22,
        question: 'What is the first program the Linux kernel starts at boot time when using System V init?',
        type: QuestionType.SingleChoice,
        options: [
          ['/lib/init.so', false],
          ['/proc/sys/kernel/init', false],
          ['/etc/rc.d/rcinit', false],
          ['/sbin/init', true],
          ['/boot/init', false]
        ],
        answer: '/sbin/init'
      },
      {
        id: 23,
        question: 'A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?',
        type: QuestionType.SingleChoice,
        options: [
          ['apt-get search /etc/debian_version', false],
          ['apt -r /etc/debian_version', false],
          ['find /etc/debian_version -dpkg', false],
          ['dpkg -S /etc/debian_version', true],
          ['apt-file /etc/debian_version', false]
        ],
        answer: 'dpkg -S /etc/debian_version'
      },
      {
        id: 24,
        question: 'What is contained on the EFI System Partition?',
        type: QuestionType.SingleChoice,
        options: [
          ['The Linux root file system', false],
          ['The first stage boot loader', true],
          ['The default swap space file', false],
          ['The Linux default shell binaries', false],
          ['The user home directories', false]
        ],
        answer: 'The first stage boot loader'
      },
      {
        id: 25,
        question: 'Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['~/.lib64/', false],
          ['/usr/lib64/', true],
          ['/var/lib64/', false],
          ['/lib64/', true],
          ['/opt/lib64/', false]
        ],
        answer: ['/usr/lib64/', '/lib64/']
      },
      {
        id: 26,
        question: 'Which of the following files exist in a standard GRUB 2 installation? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['/boot/grub/stages/stage0', false],
          ['/boot/grub/i386-pc/lvm.mod', true],
          ['/boot/grub/fstab', false],
          ['/boot/grub/grub.cfg', true],
          ['/boot/grub/linux/vmlinuz', false]
        ],
        answer: ['/boot/grub/i386-pc/lvm.mod', '/boot/grub/grub.cfg']
      },
      {
        id: 27,
        question: 'Which of the following commands installs all packages with a name ending with the string foo?',
        type: QuestionType.SingleChoice,
        options: [
          ['zypper get "*foo"', false],
          ['zypper update "foo?"', false],
          ['zypper force "foo*"', false],
          ['zypper install "*foo"', true],
          ['zypper add ".*foo"', false]
        ],
        answer: 'zypper install "*foo"'
      },
      {
        id: 28,
        question: 'Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['The partitioning scheme', false],
          ['The file system', false],
          ['The D-Bus Machine ID', false],
          ['The permissions of /root/', false],
          ['The SSH host keys', true]
        ],
        answer: ['The SSH host keys', 'The D-Bus Machine ID']
      },
      {
        id: 29,
        question: 'Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?',
        type: QuestionType.SingleChoice,
        options: [
          ['grub2 install /dev/sdc', false],
          ['grub-mkrescue /dev/sdc', false],
          ['grub-mbrinstall /dev/sdc', false],
          ['grub-setup /dev/sdc', false],
          ['grub-install /dev/sdc', true]
        ],
        answer: 'grub-install /dev/sdc'
      },
      {
        id: 30,
        question: 'Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?',
        type: QuestionType.SingleChoice,
        options: [
          ['7', false],
          ['82', true],
          ['83', false],
          ['8e', false],
          ['fd', false]
        ],
        answer: '82'
      },
      {
        id: 31,
        question: 'What is true regarding the configuration of yum? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['Changes to the repository configuration become active after running yum confupdate', false],
          ['Changes to the yum configuration become active after restarting the yumd service', false],
          ['The configuration of package repositories can be divided into multiple files', true],
          ['Repository configurations can include variables such as $basearch or $releasever', true],
          ['In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored', false]
        ],
        answer: ['The configuration of package repositories can be divided into multiple files', 'Repository configurations can include variables such as $basearch or $releasever']
      },
      {
        id: 32,
        question: 'Which of the following apt-get subcommands installs the newest versions of all currently installed packages?',
        type: QuestionType.SingleChoice,
        options: [
          ['auto-update', false],
          ['dist-upgrade', true],
          ['full-upgrade', false],
          ['install', false],
          ['update', false]
        ],
        answer: 'dist-upgrade'
      },
      {
        id: 33,
        question: 'Which command uninstalls a package but keeps its configuration files in case the package is re-installed?',
        type: QuestionType.SingleChoice,
        options: [
          ['dpkg -s pkgname', false],
          ['dpkg -L pkgname', false],
          ['dpkg -P pkgname', false],
          ['dpkg -v pkgname', false],
          ['dpkg -r pkgname', true]
        ],
        answer: 'dpkg -r pkgname'
      },
      {
        id: 34,
        question: 'Which of the following commands lists the dependencies of the RPM package file foo.rpm?',
        type: QuestionType.SingleChoice,
        options: [
          ['rpm -qpR foo.rpm', true],
          ['rpm -dep foo', false],
          ['rpm -ld foo.rpm', false],
          ['rpm -R foo.rpm', false],
          ['rpm -pD foo', false]
        ],
        answer: 'rpm -qpR foo.rpm'
      },
      {
        id: 35,
        question: 'What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?',
        type: QuestionType.SingleChoice,
        options: [
          ['9', false],
          ['15', false],
          ['19', true],
          ['49', false],
          ['99', false]
        ],
        answer: '19'
      },
      {
        id: 36,
        question: 'Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['find /tmp -user root -print', true],
          ['find -path /tmp -uid root', false],
          ['find /tmp -uid root -print', true],
          ['find /tmp -user root', false],
          ['find -path /tmp -user root -print', false]
        ],
        answer: ['find /tmp -user root -print', 'find /tmp -uid root -print']
      },
      {
        id: 37,
        question: 'Which of the following are valid stream redirection operators within Bash? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['<', true],
          ['#>', false],
          ['%>', false],
          ['>>>', false],
          ['2>&1', true]
        ],
        answer: ['<', '2>&1']
      },
      {
        id: 38,
        question: 'Which of the following vi commands deletes two lines, the current and the following line?',
        type: QuestionType.SingleChoice,
        options: [
          ['d2', false],
          ['2d', false],
          ['2dd', true],
          ['dd2', false],
          ['de12', false]
        ],
        answer: '2dd'
      },
      {
        id: 39,
        question: 'The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?',
        type: QuestionType.SingleChoice,
        options: [
          ['job -b dmaint', false],
          ['dbmaint &>/dev/pts/null', false],
          ['nohup dbmaint &', true],
          ['bg dbmaint', false],
          ['wait dbmaint', false]
        ],
        answer: 'nohup dbmaint &'
      },
      {
        id: 40,
        question: 'From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['source /usr/local/bin/runme.sh', true],
          ['/usr/local/bin/runme.sh', true],
          ['/bin/bash /usr/local/bin/runme.sh', false],
          ['. /usr/local/bin/runme.sh', true],
          ['run /usr/local/bin/runme.sh', false]
        ],
        answer: ['source /usr/local/bin/runme.sh', '/usr/local/bin/runme.sh']
      },
      {
        id: 41,
        question: 'Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)',
        type: QuestionType.FillIn,
        answer: 'watch'
      },
      {
        id: 42,
        question: 'Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?',
        type: QuestionType.SingleChoice,
        options: [
          ['i (lowercase)', false],
          ['p (lowercase)', true],
          ['P (uppercase)', false],
          ['U (uppercase)', false],
          ['u (lowercase)', false]
        ],
        answer: 'p (lowercase)'
      },
      {
        id: 43,
        question: 'Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?',
        type: QuestionType.SingleChoice,
        options: [
          ["tr -d '\r' < userlist.txt > newlist.txt", true],
          ["tr -c '\n\r' '' <newlist.txt> userlist.txt", false],
          ["tr '\r\n' '' <userlist.txt> newlist.txt", false],
          ["tr '\r' '\n' userlist.txt newlist.txt", false],
          ["tr -s '/^M/^J/' userlist.txt newlist.txt", false]
        ],
        answer: "tr -d '\r' < userlist.txt > newlist.txt"
      },
      {
        id: 44,
        question: 'Given the following input stream: txt1.txt atxt.txt txtB.txt Which of the following regular expressions turns this input stream into the following output stream? txt1.bak.txt atxt.bak.txt txtB.bak.txt',
        type: QuestionType.SingleChoice,
        options: [
          ['s/^.txt/.bak/', false],
          ['s/txt/bak.txt/', false],
          ['s/txt$/bak.txt/', true],
          ['s/^txt$/.bak^/', false],
          ['s/[.txt]/.bak$1/', false]
        ],
        answer: 's/txt$/bak.txt/'
      },
      {
        id: 45,
        question: 'Which command must be entered before exiting vi to save the current file as filea.txt?',
        type: QuestionType.SingleChoice,
        options: [
          ['%s filea.txt', false],
          ['%w filea.txt', false],
          [':save filea.txt', false],
          [':w filea.txt', true],
          [':s filea.txt', false]
        ],
        answer: ':w filea.txt'
      },
      {
        id: 46,
        question: 'Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?',
        type: QuestionType.SingleChoice,
        options: [
          ['SIGTERM', false],
          ['SIGCONT', false],
          ['SIGSTOP', false],
          ['SIGKILL', false],
          ['SIGINT', true]
        ],
        answer: 'SIGINT'
      },
      {
        id: 47,
        question: 'Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?',
        type: QuestionType.SingleChoice,
        options: [
          ['foo | less /tmp/foodata', false],
          ['foo | cp /tmp/foodata', false],
          ['foo > /tmp/foodata', false],
          ['foo | tee /tmp/foodata', true],
          ['foo > stdout >> /tmp/foodata', false]
        ],
        answer: 'foo | tee /tmp/foodata'
      },
      {
        id: 48,
        question: 'What output will be displayed when the user fred executes the following command? echo \'fred $USER\'',
        type: QuestionType.SingleChoice,
        options: [
          ['fred fred', false],
          ['fred /home/fred/', false],
          ['\'fred $USER\'', false],
          ['fred $USER', true],
          ['\'fred fred\'', false]
        ],
        answer: 'fred $USER'
      },
      {
        id: 49,
        question: 'Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?',
        type: QuestionType.SingleChoice,
        options: [
          ['lsattr foo', false],
          ['apropos foo', false],
          ['locate foo', false],
          ['whatis foo', false],
          ['which foo', true]
        ],
        answer: 'which foo'
      },
      {
        id: 50,
        question: 'When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?',
        type: QuestionType.SingleChoice,
        options: [
          ['-rep-space', false],
          ['-printnul', false],
          ['-nospace', false],
          ['-ignore-space', false],
          ['-print0', true]
        ],
        answer: '-print0'
      },
      {
        id: 51,
        question: 'Which of the following commands can be used to determine how long the system has been running? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['uptime', true],
          ['up', false],
          ['time --up', false],
          ['uname -u', false],
          ['top', true]
        ],
        answer: ['uptime', 'top']
      },
      {
        id: 52,
        question: 'What is true regarding the command ls > files if files does not exist?',
        type: QuestionType.SingleChoice,
        options: [
          ['The output of ls is printed to the terminal', false],
          ['files is created and contains the output of ls', true],
          ['An error message is shown and ls is not executed', false],
          ['The command files is executed and receives the output of ls', false],
          ['Any output of ls is discarded', false]
        ],
        answer: 'files is created and contains the output of ls'
      },
      {
        id: 53,
        question: 'Which of the following files, located in a user’s home directory, contains the Bash history?',
        type: QuestionType.SingleChoice,
        options: [
          ['.bashrc_history', false],
          ['.bash_histfile', false],
          ['.history', false],
          ['.bash_history', true],
          ['.history_bash', false]
        ],
        answer: '.bash_history'
      },
      {
        id: 54,
        question: 'Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2',
        type: QuestionType.MultipleChoice,
        options: [
          ['ttyS[1-5]', false],
          ['tty?[0-5]', true],
          ['tty*2', false],
          ['tty[A-Z][012]', false],
          ['tty[Ss][02]', true]
        ],
        answer: ['tty?[0-5]', 'tty[Ss][02]']
      },
      {
        id: 55,
        question: 'Which of the following commands redirects the output of ls to standard error?',
        type: QuestionType.SingleChoice,
        options: [
          ['ls >-1', false],
          ['ls <<ERR', false],
          ['ls >&2', true],
          ['ls >>2', false],
          ['ls |error', false]
        ],
        answer: 'ls >&2'
      },
      {
        id: 56,
        question: 'Which of the following commands displays the contents of a gzip compressed tar archive?',
        type: QuestionType.SingleChoice,
        options: [
          ['gzip archive.tgz | tar xvf', false],
          ['tar -fzt archive.tgz', false],
          ['gzip -d archive.tgz | tar tvf', false],
          ['tar cf archive.tgz', false],
          ['tar ztf archive.tgz', true]
        ],
        answer: 'tar ztf archive.tgz'
      },
      {
        id: 57,
        question: 'Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?',
        type: QuestionType.SingleChoice,
        options: [
          ['fmt -f 1,4 /etc/passwd', false],
          ['cut -d : -f 1,4 /etc/passwd', true],
          ['sort -t : -k 1,4 /etc/passwd', false],
          ['paste -f 1,4 /etc/passwd', false],
          ['split -c 1,4 /etc/passwd', false]
        ],
        answer: 'cut -d : -f 1,4 /etc/passwd'
      },
      {
        id: 58,
        question: 'Which of the following regular expressions represents a single upper-case letter?',
        type: QuestionType.SingleChoice,
        options: [
          [':UPPER:', false],
          ['[A-Z]', true],
          ['!a-z', false],
          ['%C', false],
          ['{AZ}', false]
        ],
        answer: '[A-Z]'
      },
      {
        id: 59,
        question: 'Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)',
        type: QuestionType.FillIn,
        answer: 'nice'
      },
      {
        id: 60,
        question: 'Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?',
        type: QuestionType.SingleChoice,
        options: [
          ['grep -E \':08:[09]+:[09]+’ loga.log', false],
          ['grep -E \':08:[00]+’ loga.log', false],
          ['grep -E loga.log \':08:[0-9]+:[0-9]+’', false],
          ['grep loga.log \':08:[0-9]:[0-9]’', false],
          ['grep -E \':08:[0-9]+:[0-9]+’ loga.log', true]
        ],
        answer: 'grep -E \':08:[0-9]+:[0-9]+’ loga.log'
      },
      {
        id: 61,
        question: 'Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['LABEL', true],
          ['ID', false],
          ['FIND', false],
          ['NAME', false],
          ['UUID', true]
        ],
        answer: ['LABEL', 'UUID']
      },
      {
        id: 62,
        question: 'A yum repository can declare sets of related packages. Which yum command installs all packages belonging to the group admintools?',
        type: QuestionType.SingleChoice,
        options: [
          ['yum pkgsel --install admintools', false],
          ['yum install admintools/*', false],
          ['yum groupinstall admintools', true],
          ['yum taskinstall admintools', false],
          ['yum collection install admintools', false]
        ],
        answer: 'yum groupinstall admintools'
      },
      {
        id: 63,
        question: 'What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)',
        type: QuestionType.FillIn,
        answer: '/etc/yum.repos.d'
      },
      {
        id: 64,
        question: 'Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?',
        type: QuestionType.SingleChoice,
        options: [
          ['grub-install /dev/sda', false],
          ['grub-install /dev/sda1', true],
          ['grub-install current /dev/sda0', false],
          ['grub-install /dev/sda0', false],
          ['grub-install current /dev/sda1', false]
        ],
        answer: 'grub-install /dev/sda1'
      },
      {
        id: 65,
        question: 'Which of the following files are found in the /boot/ filesystem? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['Linux kernel images', true],
          ['Bash shell binaries', false],
          ['systemd target and service units', false],
          ['Initial ramdisk images', true],
          ['fsck binaries', false]
        ],
        answer: ['Linux kernel images', 'Initial ramdisk images']
      },
      {
        id: 66,
        question: 'Which file defines the network locations from where the Debian package manager downloads software packages?',
        type: QuestionType.SingleChoice,
        options: [
          ['/etc/dpkg/dpkg.cfg', false],
          ['/etc/apt/apt.conf.d', false],
          ['/etc/apt/apt.conf', false],
          ['/etc/dpkg/dselect.cfg', false],
          ['/etc/apt/sources.list', true]
        ],
        answer: '/etc/apt/sources.list'
      },
      {
        id: 67,
        question: 'When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?',
        type: QuestionType.SingleChoice,
        options: [
          ['--clean', false],
          ['--purge', true],
          ['--vacuum', false],
          ['--remove', false],
          ['--declare', false]
        ],
        answer: '--purge'
      },
      {
        id: 68,
        question: 'Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.', true],
          ['Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.', true],
          ['Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.', false],
          ['The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.', true],
          ['Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution.', false]
        ],
        answer: ['Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.',
                  'Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.',
                  'The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.']
      },
      {
        id: 69,
        question: 'The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?',
        type: QuestionType.SingleChoice,
        options: [
          ['dpkg --fix --all', false],
          ['apt-get autoinstall', false],
          ['dpkg-reconfigure --all', false],
          ['apt-get all', false],
          ['apt-get install -f', true]
        ],
        answer: 'apt-get install -f'
      },
      {
        id: 70,
        question: 'Which of the following commands lists all currently installed packages when using RPM package management?',
        type: QuestionType.SingleChoice,
        options: [
          ['yum --query --all', false],
          ['yum --list --installed', false],
          ['rpm --query --list', false],
          ['rpm --list --installed', true],
          ['rpm --query --all', false]
        ],
        answer: 'rpm --list --installed'
      },
      {
        id: 71,
        question: 'Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['menuentry', true],
          ['uefi', false],
          ['pxe-ifconfig', false],
          ['insmod', true],
          ['kpartx', false]
        ],
        answer: ['menuentry', 'insmod']
      },
      {
        id: 72,
        question: 'What is the purpose of the ldd command?',
        type: QuestionType.SingleChoice,
        options: [
          ['It lists which shared libraries a binary needs to run.', true],
          ['It installs and updates installed shared libraries.', false],
          ['It turns a dynamically linked binary into a static binary.', false],
          ['It defines which version of a library should be used by default.', false],
          ['It runs a binary with an alternate library search path.', false]
        ],
        answer: 'It lists which shared libraries a binary needs to run.'
      },
      {
        id: 73,
        question: 'What can the Logical Volume Manager (LVM) be used for? (Choose three.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['To create snapshots.', true],
          ['To dynamically change the size of logical volumes.', true],
          ['To dynamically create or delete logical volumes.', true],
          ['To create RAID 9 arrays.', false],
          ['To encrypt logical volumes.', false]
        ],
        answer: ['To create snapshots.', 'To dynamically change the size of logical volumes.', 'To dynamically create or delete logical volumes.']
      },
      {
        id: 74,
        question: 'What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.', false],
          ['By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.', false],
          ['By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.', false],
          ['MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.', true],
          ['Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.', true]
        ],
        answer: ['MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.', 'Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.']
      },
      {
        id: 75,
        question: 'A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)',
        type: QuestionType.MultipleChoice,
        options: [
          ['The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.', true],
          ['The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.', false],
          ['The backup is guaranteed to be unchanged because a hard linked file cannot be modified after its creation.', false],
          ['The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.', true],
          ['The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.', false]
        ],
        answer: ['The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.', 'The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.']
      },
      {
        id: 76,
        question: 'Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)',
        type: QuestionType.FillIn,
        answer: '/proc/mounts'
      },
      {
        id: 77,
        question: 'How many fields are in a syntactically correct line of /etc/fstab?',
        type: QuestionType.SingleChoice,
        options: [
          ['3', false],
          ['4', false],
          ['5', false],
          ['6', false],
          ['7', true]
        ],
        answer: '7'
      },
      {
        id: 78,
        question: "Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.", true],
          ["filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.", false],
          ["filea.txt has the sticky bit set and a regular user cannot remove this permission.", false],
          ["filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.", false],
          ["filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file.", true]
        ],
        answer: ["filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.", "filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file."]
      },
      {
        id: 79,
        question: "Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["JFS", false],
          ["ext3", true],
          ["XFS", false],
          ["ext2", true],
          ["procfs", false]
        ],
        answer: ["ext3", "ext2"]
      },
      {
        id: 80,
        question: "Which of the following commands sets the SetUID permission on the executable /bin/foo?",
        type: QuestionType.SingleChoice,
        options: [
          ["chmod 4755 /bin/foo", true],
          ["chmod 1755 /bin/foo", false],
          ["chmod u-s /bin/foo", false],
          ["chmod 755+s /bin/foo", false],
          ["chmod 2755 /bin/foo", false]
        ],
        answer: "chmod 4755 /bin/foo"
      },
      {
        id: 81,
        question: "Which of the following commands can be used to display the inode number of a given file? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["inode", false],
          ["ln", false],
          ["ls", true],
          ["cp", false],
          ["stat", true]
        ],
        answer: ["ls", "stat"]
      },
      {
        id: 82,
        question: "Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?",
        type: QuestionType.SingleChoice,
        options: [
          ["0017", false],
          ["0640", false],
          ["0038", false],
          ["0227", false],
          ["0027", true]
        ],
        answer: "0027"
      },
      {
        id: 83,
        question: "After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?",
        type: QuestionType.SingleChoice,
        options: [
          ["By using mount -f to force a mount of the file system", false],
          ["By running xfsck on the file system", false],
          ["By mounting the file system with the option xfs_repair", false],
          ["By running xfsadmin repairon the file system", false],
          ["By running xfs_repair on the file system", true]
        ],
        answer: "By running xfs_repair on the file system"
      },
      {
        id: 84,
        question: "Which of the following properties of an existing file changes when a hard link pointing to that file is created?",
        type: QuestionType.SingleChoice,
        options: [
          ["File size", false],
          ["Link count", true],
          ["Modify timestamp", false],
          ["Inode number", false],
          ["Permissions", false]
        ],
        answer: "Link count"
      },
      {
        id: 85,
        question: "Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system?",
        type: QuestionType.FillIn,
        answer: "/usr/local/bin"
      },
      {
        id: 86,
        question: "Which of the following commands show how the shell handles a specific command?",
        type: QuestionType.SingleChoice,
        options: [
          ["where", false],
          ["type", true],
          ["stat", false],
          ["case", false],
          ["fileinfo", false]
        ],
        answer: "type"
      },
      {
        id: 87,
        question: "When in Normal mode in vi, which character can be used to begin a reverse search of the text?",
        type: QuestionType.SingleChoice,
        options: [
          ["r", false],
          ["/", false],
          ["F", false],
          ["?", true],
          ["s", false]
        ],
        answer: "?"
      },
      {
        id: 88,
        question: "Which of the following commands displays the manual page command from section 1?",
        type: QuestionType.SingleChoice,
        options: [
          ["man command(1)", false],
          ["man command@1", false],
          ["man 1 command", true],
          ["man 1.command", false],
          ["man -s 1 command", false]
        ],
        answer: "man 1 command"
      },
      {
        id: 89,
        question: "Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?",
        type: QuestionType.SingleChoice,
        options: [
          ["ls 3> data", false],
          ["ls >& data", false],
          ["ls > data", true],
          ["ls >> data", false],
          ["ls >>> data", false]
        ],
        answer: "ls > data"
      },
      {
        id: 90,
        question: "Which of the following commands is used to change options and positional parameters within a running Bash shell?",
        type: QuestionType.SingleChoice,
        options: [
          ["history", false],
          ["setsh", false],
          ["bashconf", false],
          ["set", true],
          ["envsetup", false]
        ],
        answer: "set"
      },
      {
        id: 91,
        question: "Which of the following commands display the IDs of all processes owned by root? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["pgrep -c root", false],
          ["pgrep -u root", true],
          ["pgrep -f root", false],
          ["pgrep -U 0", true],
          ["pgrep -c 0", false]
        ],
        answer: ["pgrep -u root", "pgrep -U 0"]
      },
      {
        id: 92,
        question: "Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["Ctrl XX", false],
          ["Ctrl :W", false],
          ["Esc zz", false],
          ["Esc :wq", true],
          ["Esc ZZ", true]
        ],
        answer: ["Esc :wq", "Esc ZZ"]
      },
      {
        id: 93,
        question: "What is the effect of the -v option for the grep command?",
        type: QuestionType.SingleChoice,
        options: [
          ["It enables color to highlight matching parts.", false],
          ["It shows the command’s version information.", false],
          ["It only outputs non-matching lines.", true],
          ["It changes the output order showing the last matching line first.", false],
          ["It outputs all lines and prefixes matching lines with a+.", false]
        ],
        answer: "It only outputs non-matching lines."
      },
      {
        id: 94,
        question: "Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["find", false],
          ["pwd", false],
          ["which", true],
          ["locate", false],
          ["type", true]
        ],
        answer: ["which", "type"]
      },
      {
        id: 95,
        question: "Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?",
        type: QuestionType.SingleChoice,
        options: [
          ["SIGTERM", false],
          ["SIGCONT", false],
          ["SIGSTOP", true],
          ["SIGKILL", false],
          ["SIGINT", false]
        ],
        answer: "SIGSTOP"
      },
      {
        id: 96,
        question: "What is the output when the regular expression 's/[ABC][abc]/xx/' is applied to the following string? ABCabc",
        type: QuestionType.SingleChoice,
        options: [
          ["ABxxbc", true],
          ["xxCxxc", false],
          ["xxxxxx", false],
          ["ABCabc", false],
          ["Axxaxx", false]
        ],
        answer: "ABxxbc"
      },
      {
        id: 97,
        question: "Which of the following commands print the current working directory when using a Bash shell? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["echo \"${PWD}\"", true],
          ["echo \"${WD}\"", false],
          ["printwd", false],
          ["pwd", true],
          ["echo \"${pwd}\"", false]
        ],
        answer: ["echo \"${PWD}\"", "pwd"]
      },
      {
        id: 98,
        question: "Which of the following commands outputs test to the shell?",
        type: QuestionType.SingleChoice,
        options: [
          ["cat <!EOT \ntest\nEOT", false],
          ["cat <|EOT", false],
          ["cat !<EOT", false],
          ["cat &<EOT", false],
          ["cat <<EOT\ntest\nEOT", true]
        ],
        answer: "cat <<EOT\ntest\nEOT"
      },
      {
        id: 99,
        question: "What is the default nice level when a process is started using the nice command?",
        type: QuestionType.SingleChoice,
        options: [
          ["-10", false],
          ["0", false],
          ["10", true],
          ["15", false],
          ["20", false]
        ],
        answer: "10"
      },
      {
        id: 100,
        question: "A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remove that directory?",
        type: QuestionType.SingleChoice,
        options: [
          ["rmdir ~/\\dir", true],
          ["rmdir \"~/\\dir\"", false],
          ["rmdir ~/’dir’", false],
          ["rmdir ~/\dir", false],
          ["rmdir '~/\\dir’", false]
        ],
        answer: "rmdir ~/\\dir"
      },
      {
        id: 101,
        question: "Which of the following commands can perform searches on file contents using regular expressions?",
        type: QuestionType.SingleChoice,
        options: [
          ["find", false],
          ["locate", false],
          ["grep", true],
          ["reggrep", false],
          ["pgrep", false]
        ],
        answer: "grep"
      },
      {
        id: 102,
        question: "In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?",
        type: QuestionType.SingleChoice,
        options: [
          ["-maxdepth", true],
          ["-dirmax", false],
          ["-maxlevels", false],
          ["-s", false],
          ["-n", false]
        ],
        answer: "-maxdepth"
      },
      {
        id: 103,
        question: "Which of the following commands determines a file’s format by using a definition database file which contains information about all common file types?",
        type: QuestionType.SingleChoice,
        options: [
          ["type", false],
          ["file", true],
          ["magic", false],
          ["pmagic", false],
          ["hash", false]
        ],
        answer: "file"
      },
      {
        id: 104,
        question: "Which of the following commands generates a list of user names from /etc/passwd along with their login shell?",
        type: QuestionType.SingleChoice,
        options: [
          ["column -s : 1,7 /etc/passwd", false],
          ["chop -c 1,7 /etc/passwd", false],
          ["colrm 1,7 /etc/passwd", false],
          ["sort -t: -k1,7 /etc/passwd", false],
          ["cut -d: -f1,7 /etc/passwd", true]
        ],
        answer: "cut -d: -f1,7 /etc/passwd"
      },
      {
        id: 105,
        question: "If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?",
        type: QuestionType.SingleChoice,
        options: [
          ["Only a.txt, b.txt, and texts.tgz", false],
          ["Only texts.tar and texts.tgz", false],
          ["Only a.txt.gz and b.txt.gz", false],
          ["Only a.txt and b.txt", false],
          ["Only texts.tar", true]
        ],
        answer: "Only texts.tar"
      },
      {
        id: 106,
        question: "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?",
        type: QuestionType.SingleChoice,
        options: [
          ["By using the command :repeat followed by the number and the command", false],
          ["By specifying the number right in front of a command such as 4l or 2yj.", true],
          ["By selecting all affected lines using the shift and cursor keys before applying the command.", false],
          ["By issuing a command such as :set repetition=4 which repeats every subsequent command 4 times.", false],
          ["By specifying the number after a command such as l4 or yj2 followed by escape.", false]
        ],
        answer: "By specifying the number right in front of a command such as 4l or 2yj."
      },
      {
        id: 107,
        question: "Which of the following statements is correct for a command ending with an & character?",
        type: QuestionType.SingleChoice,
        options: [
          ["The command’s output is redirected to /dev/null.", false],
          ["The command is run in the background of the current shell.", true],
          ["The command’s output is executed by the shell.", false],
          ["The command is run as a direct child of the init process.", false],
          ["The command’s input is read from /dev/null.", false]
        ],
        answer: "The command is run in the background of the current shell."
      },
      {
        id: 108,
        question: "Which of the following commands reads a file and creates separate chunks of a given size from the file’s contents?",
        type: QuestionType.SingleChoice,
        options: [
          ["ar", false],
          ["cat", false],
          ["break", false],
          ["split", true],
          ["parted", false]
        ],
        answer: "split"
      },
      {
        id: 109,
        question: "What is the purpose of the xargs command?",
        type: QuestionType.SingleChoice,
        options: [
          ["It passes arguments to an X server.", false],
          ["It repeats the execution of a command using different parameters for each invocation.", false],
          ["It reads standard input and builds up commands to execute.", true],
          ["It asks a question, graphically, and returns the answer to the shell.", false],
          ["It allows specifying long options (like --help) for commands that normally only accept short options (like -h).", false]
        ],
        answer: "It reads standard input and builds up commands to execute."
      },
      {
        id: 110,
        question: "Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)",
        type: QuestionType.FillIn,
        answer: "jobs"
      },
      {
        id: 111,
        question: "Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)",
        type: QuestionType.FillIn,
        answer: "renice"
      },
      {
        id: 112,
        question: "In Bash, inserting 1>&2 after a command redirects…",
        type: QuestionType.SingleChoice,
        options: [
          ["…standard error to standard input.", false],
          ["…standard output to standard error.", true],
          ["…standard input to standard error.", false],
          ["…standard error to standard output.", false],
          ["…standard output to standard input.", false]
        ],
        answer: "…standard output to standard error."
      },
      {
        id: 113,
        question: "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?",
        type: QuestionType.SingleChoice,
        options: [
          ["Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.", false],
          ["Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.", false],
          ["Investigating the files in /var/log on the computer’s hard disk for possible errors.", true],
          ["Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.", false],
          ["Rebooting again from the hard drive since the system successfully booted from the rescue CD.", false]
        ],
        answer: "Investigating the files in /var/log on the computer’s hard disk for possible errors."
      },
      {
        id: 114,
        question: "Where is the bootloader stored on the hard disk of a UEFI system?",
        type: QuestionType.SingleChoice,
        options: [
          ["In the EFI Boot Record (EBR).", false],
          ["In the Master Boot Record (MBR).", false],
          ["On the EFI System Partition (ESP).", true],
          ["On the partition labeled boot.", false],
          ["On the partition number 127.", false]
        ],
        answer: "On the EFI System Partition (ESP)."
      },
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
      },
      {
        id: 116,
        question: "Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["An initramfs is a compressed file system archive, which can be unpacked to examine its contents.", true],
          ["An initramfs file contains the MBR, the bootloader and the Linux kernel.", false],
          ["After a successful boot, the initramfs contents are available in /run/initramfs/.", true],
          ["The kernel uses the initramfs temporarily before accessing the real root file system.", false],
          ["An initramfs does not depend on a specific kernel version and is not changed after the initial installation.", false]
        ],
        answer: ["An initramfs is a compressed file system archive, which can be unpacked to examine its contents.", "After a successful boot, the initramfs contents are available in /run/initramfs/."]
      },
      {
        id: 117,
        question: "Which of the following commands loads a kernel module along with any required dependency modules?",
        type: QuestionType.SingleChoice,
        options: [
          ["depmod", false],
          ["modprobe", true],
          ["module_install", false],
          ["insmod", false],
          ["loadmod", false]
        ],
        answer: "modprobe"
      },
      {
        id: 118,
        question: "What information can the lspci command display about the system hardware? (Choose three.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["System battery type", false],
          ["Device IRQ settings", false],
          ["PCI bus speed", true],
          ["Ethernet MAC address", true],
          ["Device vendor identification", true]
        ],
        answer: ["PCI bus speed", "Ethernet MAC address", "Device vendor identification"]
      },
      {
        id: 119,
        question: "Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)",
        type: QuestionType.FillIn,
        answer: "/etc/inittab"
      },
      {
        id: 120,
        question: "Given the following two symbolic links in a System V init configuration: /etc/rc1.d/K01apache2 /etc/rc2.d/S02apache2 When are the scripts executed that are referenced by these links? (Choose two.)",
        type: QuestionType.MultipleChoice,
        options: [
          ["S02apache2 is run when runlevel 2 is entered.", true],
          ["S02apache2 is run when runlevel 2 is left.", false],
          ["K01apache2 is never run because K indicates a deactivated service.", false],
          ["Both S02apache2 and K01apache2 are run during a system shutdown.", false],
          ["K01apache2 is run when runlevel 1 is entered.", true]
        ],
        answer: ["S02apache2 is run when runlevel 2 is entered.", "K01apache2 is run when runlevel 1 is entered."]
      }    
  ];
  