// ============================================================
// BODYBLUEPRINT - COMPLETE SCRIPT
// ============================================================

const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const toast = document.getElementById('toast');

const STORAGE_KEY = 'bodyblueprint_state_v3';


// ============================================================
// IMAGE DATABASE
// ============================================================

const IMG = {

    pullups: 'assets/pullups.png',
    singleArmLat: 'assets/singlearm_lat_pullbacks.png',
    lat: 'assets/lat_pulldown.png',
    seated: 'assets/seated_cable_row.png',
    tbar: 'assets/t_bar_row.png',
    reverseLat: 'assets/reverse_grip_lat_pulldown.png',
    seatedWide: 'assets/seated_row_wide_handle.png',
    hyper: 'assets/hyper_extensions.png',

    inclineBench: 'assets/incline_dumble_press.png',
    flatBench: 'assets/flat_bench_press.png',
    butterflies: 'assets/butterflies.png',
    lowerChestCable: 'assets/lower_chest_cable.png',

    dumbbellCurl: 'assets/dumbbell_curls.png',
    inclineDumbbellCurls: 'assets/incline_dumble_curls.png',
    preacher: 'assets/preacher_curls.png',
    hammer: 'assets/hammer_curls.png',

    overhead: 'assets/overhead_dumbbell_press.png',
    lateral: 'assets/lateral_raises.png',
    singleArmFrontRaise: 'assets/lateral_raises.png',
    rearDelt: 'assets/lateral_raises.png',

    tricepPushdown: 'assets/tricep_pushdown.png',
    tricepRope: 'assets/tricep_rope_pushdown.png',
    skullCrusher: 'assets/skull_crushers.png',
    dips: 'assets/tricep_dips.png',

    crunch: 'assets/crunches.png',
    legRaises: 'assets/leg_raises.png',
    dragonFly: 'assets/leg_raises.png',

    smith: 'assets/smith_squats.png',
    sumo: 'assets/sumo_squats.png',
    legExtension: 'assets/leg_extensions.png',
    legPress: 'assets/leg_press.png',
    legCurl: 'assets/leg_curls.png',
    calf: 'assets/calf_raises.png',
    forearm: 'assets/forearm_machine.png',

    reverseCurl: 'assets/forearm_machine.png',
    frontCurl: 'assets/forearm_machine.png'
};


// ============================================================
// EXERCISE DATABASE
// ============================================================

const EX = {

    pullups: [
        'Pull-Ups',
        IMG.pullups,
        'Back · Lats · Biceps',
        'Start from a dead hang, brace your core, pull your chest toward the bar and lower under control.'
    ],

    singleArmLat: [
        'Single-Arm Lat Pull Back',
        IMG.singleArmLat,
        'Back · Lats',
        'Keep your torso stable, pull the handle down and back toward your hip, then return slowly.'
    ],

    lat: [
        'Lat Pulldown',
        IMG.lat,
        'Back · Lats',
        'Sit tall, grip the bar, pull it toward your upper chest and squeeze your lats.'
    ],

    seated: [
        'Seated Cable Row',
        IMG.seated,
        'Back · Mid-back',
        'Keep your spine neutral, pull the handle toward your torso and squeeze your shoulder blades.'
    ],

    tbar: [
        'T-Bar Row',
        IMG.tbar,
        'Back · Upper Back',
        'Brace your core, pull the bar toward your torso and lower it slowly without rounding your back.'
    ],

    reverseLat: [
        'Reverse Grip Lat Pulldown',
        IMG.reverseLat,
        'Back · Lats · Biceps',
        'Use an underhand grip, pull the bar toward your upper chest and keep your torso controlled.'
    ],

    seatedWide: [
        'Seated Row Wide Handle',
        IMG.seatedWide,
        'Back · Upper/Mid Back',
        'Use the wide handle, pull toward your torso and squeeze your upper back under control.'
    ],

    hyper: [
        'Hyper Extensions',
        IMG.hyper,
        'Lower Back · Glutes · Hamstrings',
        'Hinge at the hips, lower your upper body under control and raise until your body is in a straight line.'
    ],

    inclineBench: [
        'Incline Dumbbell Press',
        IMG.inclineBench,
        'Upper Chest · Shoulders · Triceps',
        'Use a 30–45° incline, press the dumbbells upward and lower them with control.'
    ],

    flatBench: [
        'Flat Bench Press',
        IMG.flatBench,
        'Chest · Triceps · Shoulders',
        'Keep your feet planted, lower the weight toward mid-chest and press upward under control.'
    ],

    butterflies: [
        'Butterflies',
        IMG.butterflies,
        'Chest · Isolation',
        'Keep a slight bend in your elbows, bring the handles together and squeeze your chest.'
    ],

    lowerChestCable: [
        'Lower Chest Cable',
        IMG.lowerChestCable,
        'Lower Chest',
        'Use a controlled cable movement, bring the handles down and together and squeeze the lower chest.'
    ],

    dumbbellCurl: [
        'Dumbbell Curls',
        IMG.dumbbellCurl,
        'Biceps · Forearms',
        'Keep your elbows close to your body, curl the dumbbells without swinging and lower slowly.'
    ],

    inclineDumbbellCurls: [
        'Incline Dumbbell Curls',
        IMG.inclineDumbbellCurls,
        'Biceps · Forearms',
        'Set the bench to an incline, let your arms hang naturally, curl without swinging and lower slowly.'
    ],

    preacher: [
        'Preacher Curls',
        IMG.preacher,
        'Biceps',
        'Keep your upper arms on the pad, curl the weight smoothly and squeeze your biceps at the top.'
    ],

    hammer: [
        'Hammer Curls',
        IMG.hammer,
        'Biceps · Brachialis · Forearms',
        'Use a neutral grip, keep your elbows stable and curl without using momentum.'
    ],

    overhead: [
        'Overhead Dumbbell Press',
        IMG.overhead,
        'Shoulders · Triceps',
        'Start with dumbbells at shoulder height, press overhead with a braced core and lower slowly.'
    ],

    lateral: [
        'Lateral Raises',
        IMG.lateral,
        'Side Deltoids',
        'Raise the dumbbells to about shoulder height with a slight elbow bend and lower slowly.'
    ],

    singleArmFrontRaise: [
        'Single-Arm Front Raises',
        IMG.singleArmFrontRaise,
        'Front Deltoids',
        'Raise one dumbbell to shoulder height with a soft elbow bend, then lower slowly.'
    ],

    rearDelt: [
        'Rear Delt Fly',
        IMG.rearDelt,
        'Rear Deltoids · Upper Back',
        'Hinge slightly, keep your chest stable and move the arms outward while squeezing the rear delts.'
    ],

    tricepPushdown: [
        'Tricep Pushdown',
        IMG.tricepPushdown,
        'Triceps',
        'Keep elbows close to your sides, push the handle down and return slowly without swinging.'
    ],

    tricepRope: [
        'Tricep Rope Pushdown',
        IMG.tricepRope,
        'Triceps',
        'Keep your elbows fixed, push the rope down and slightly apart at the bottom, then return under control.'
    ],

    skullCrusher: [
        'Skull Crushers',
        IMG.skullCrusher,
        'Triceps',
        'Keep your upper arms steady, lower the weight toward your forehead and extend your elbows smoothly.'
    ],

    dips: [
        'Dips',
        IMG.dips,
        'Triceps · Chest',
        'Keep your shoulders controlled, lower until comfortable and press back up without swinging.'
    ],

    crunch: [
        'Crunches',
        IMG.crunch,
        'Abs · Core',
        'Keep your lower back supported, curl your shoulders upward and avoid pulling your neck.'
    ],

    legRaises: [
        'Leg Raises',
        IMG.legRaises,
        'Abs · Core',
        'Keep your core tight, raise your legs under control and slowly return without swinging.'
    ],

    dragonFly: [
        'Dragon Fly Leg Raises',
        IMG.dragonFly,
        'Abs · Core',
        'Brace your core, raise and lower the legs slowly while keeping the movement controlled.'
    ],

    smith: [
        'Smith Squats',
        IMG.smith,
        'Quads · Glutes',
        'Keep your feet stable, brace your core, squat under control and drive upward through your feet.'
    ],

    sumo: [
        'Sumo Squats',
        IMG.sumo,
        'Quads · Glutes · Inner Thighs',
        'Take a wide stance with toes slightly out, squat down with control and drive back up.'
    ],

    legExtension: [
        'Leg Extensions',
        IMG.legExtension,
        'Quadriceps',
        'Extend your legs smoothly, squeeze your quads and lower under control.'
    ],

    legPress: [
        'Leg Press',
        IMG.legPress,
        'Quads · Glutes · Hamstrings',
        'Keep your back against the pad, press through your feet and lower the platform under control.'
    ],

    legCurl: [
        'Leg Curls',
        IMG.legCurl,
        'Hamstrings',
        'Keep your hips on the pad, curl your legs smoothly and slowly return.'
    ],

    calf: [
        'Calf Raises',
        IMG.calf,
        'Calves',
        'Raise your heels through a full range, pause at the top and lower slowly.'
    ],

    forearm: [
        'Forearm Machine',
        IMG.forearm,
        'Forearms · Grip',
        'Keep your forearms supported and use slow controlled repetitions.'
    ],

    reverseCurl: [
        'Reverse Curls',
        IMG.reverseCurl,
        'Forearms · Brachialis · Biceps',
        'Use an overhand grip, keep the elbows close and curl without momentum.'
    ],

    frontCurl: [
        'Front Curls',
        IMG.frontCurl,
        'Forearms · Grip',
        'Keep the forearms stable and curl through a controlled range.'
    ]
};


const E = (...names) =>
    names.map(name => EX[name]);


const warmup = text =>
    `10–15 min warm-up: ${text}`;


// ============================================================
// WORKOUT PLANS
// ============================================================

const workoutPlans = {

    beginner: {

        label: 'Beginner',

        plans: {

            standard: {

                label: 'Beginner 6-Day Plan',

                days: {

                    Monday: {
                        title: 'Chest',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable'
                        ),
                        warmup: warmup(
                            '5–10 min light cardio, arm circles, shoulder rotations and light pressing.'
                        )
                    },

                    Tuesday: {
                        title: 'Back',
                        exercises: E(
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'tbar',
                            'reverseLat',
                            'hyper'
                        ),
                        warmup: warmup(
                            '5–10 min brisk walking/cycling, shoulder circles, scapular movements and easy pulling.'
                        )
                    },

                    Wednesday: {
                        title: 'Legs',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legPress',
                            'legExtension',
                            'legCurl',
                            'calf'
                        ),
                        warmup: warmup(
                            '5–10 min brisk walking/cycling, bodyweight squats, lunges and hip mobility.'
                        )
                    },

                    Thursday: {
                        title: 'Triceps + Biceps',
                        exercises: E(
                            'tricepRope',
                            'skullCrusher',
                            'dips',
                            'hammer',
                            'inclineDumbbellCurls',
                            'preacher'
                        ),
                        warmup: warmup(
                            '5–10 min easy cardio, elbow/wrist circles and very light curls and pushdowns.'
                        )
                    },

                    Friday: {
                        title: 'Shoulders',
                        exercises: E(
                            'overhead',
                            'lateral',
                            'singleArmFrontRaise',
                            'rearDelt'
                        ),
                        warmup: warmup(
                            '5–10 min light cardio, arm circles, shoulder rotations and light presses.'
                        )
                    },

                    Saturday: {
                        title: 'Forearms + Abs + Cardio',
                        exercises: E(
                            'reverseCurl',
                            'frontCurl',
                            'crunch',
                            'dragonFly'
                        ),
                        cardio:
                            '15–25 min treadmill walking/jogging or cycling at a comfortable steady pace.',
                        warmup: warmup(
                            '5–10 min easy cardio, wrist circles, torso rotations and light core movements.'
                        )
                    }
                }
            }
        }
    },


    intermediate: {

        label: 'Intermediate',

        plans: {

            weightloss: {

                label: 'Weight Loss',

                days: {

                    Monday: {
                        title: 'Back + Biceps',
                        exercises: E(
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'tbar',
                            'reverseLat',
                            'hyper',
                            'dumbbellCurl',
                            'preacher',
                            'hammer'
                        ),
                        warmup: warmup(
                            'brisk walking/jogging, shoulder mobility and light rows.'
                        )
                    },

                    Tuesday: {
                        title: 'Legs',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk walking/cycling, squats and hip mobility.'
                        )
                    },

                    Wednesday: {
                        title: 'Chest + Triceps + Abs',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'tricepPushdown',
                            'tricepRope',
                            'legRaises',
                            'crunch'
                        ),
                        warmup: warmup(
                            'brisk walking, arm circles, shoulder rotations and light pressing.'
                        )
                    },

                    Thursday: {
                        title: 'Back + Biceps',
                        exercises: E(
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'tbar',
                            'reverseLat',
                            'hyper',
                            'dumbbellCurl',
                            'preacher',
                            'hammer'
                        ),
                        warmup: warmup(
                            'brisk walking, scapular pulls, shoulder circles and light rows.'
                        )
                    },

                    Friday: {
                        title: 'Legs',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk walking/cycling, squats and hip mobility.'
                        )
                    },

                    Saturday: {
                        title: 'Chest + Triceps + Abs',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'tricepPushdown',
                            'tricepRope',
                            'legRaises',
                            'crunch'
                        ),
                        warmup: warmup(
                            'brisk walking, arm circles, shoulder mobility and light pressing.'
                        )
                    }
                }
            },


            muscle: {

                label: 'Muscle Growth',

                days: {

                    Monday: {
                        title: 'Chest + Triceps',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'tricepPushdown',
                            'tricepRope'
                        ),
                        warmup: warmup(
                            'brisk walking/jogging, arm circles, shoulder rotations and light pressing.'
                        )
                    },

                    Tuesday: {
                        title: 'Back + Biceps',
                        exercises: E(
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'tbar',
                            'reverseLat',
                            'hyper',
                            'dumbbellCurl',
                            'preacher',
                            'hammer'
                        ),
                        warmup: warmup(
                            'brisk walking, shoulder circles, scapular pulls and light rows.'
                        )
                    },

                    Wednesday: {
                        title: 'Legs + Shoulders',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm',
                            'overhead',
                            'lateral'
                        ),
                        warmup: warmup(
                            'brisk walking/cycling, bodyweight squats, hip mobility and arm circles.'
                        )
                    },

                    Thursday: {
                        title: 'Arms',
                        exercises: E(
                            'dumbbellCurl',
                            'preacher',
                            'hammer',
                            'tricepPushdown',
                            'tricepRope',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk walking, elbow/wrist circles, light curls and pushdowns.'
                        )
                    },

                    Friday: {
                        title: 'Chest + Back',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'tbar',
                            'reverseLat',
                            'hyper'
                        ),
                        warmup: warmup(
                            'brisk walking, shoulder mobility, light pressing and rows.'
                        )
                    },

                    Saturday: {
                        title: 'Abs + Shoulders',
                        exercises: E(
                            'legRaises',
                            'crunch',
                            'overhead',
                            'lateral'
                        ),
                        warmup: warmup(
                            'brisk walking, torso rotations, hip mobility and light shoulder work.'
                        )
                    }
                }
            }
        }
    },


    expert: {

        label: 'Expert',

        plans: {

            fourday: {

                label: '4-Day Muscle Gain',

                days: {

                    Monday: {
                        title: 'Upper A',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'dumbbellCurl',
                            'tricepPushdown',
                            'overhead',
                            'lateral'
                        ),
                        warmup: warmup(
                            'brisk cardio, shoulder mobility and light compound sets.'
                        )
                    },

                    Tuesday: {
                        title: 'Lower A',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk cardio, hip mobility, bodyweight squats and lunges.'
                        )
                    },

                    Thursday: {
                        title: 'Upper B',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'pullups',
                            'singleArmLat',
                            'reverseLat',
                            'tbar',
                            'seatedWide',
                            'preacher',
                            'tricepRope',
                            'overhead'
                        ),
                        warmup: warmup(
                            'brisk cardio, shoulder mobility and light rows/presses.'
                        )
                    },

                    Friday: {
                        title: 'Lower B',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk cardio, hip mobility and controlled leg work.'
                        )
                    }
                }
            },


            fiveday: {

                label: '5-Day Muscle Gain',

                days: {

                    Monday: {
                        title: 'Chest + Biceps',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'dumbbellCurl',
                            'preacher',
                            'hammer'
                        ),
                        warmup: warmup(
                            'brisk cardio, shoulder mobility and light pressing/curls.'
                        )
                    },

                    Tuesday: {
                        title: 'Back + Triceps',
                        exercises: E(
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'tbar',
                            'reverseLat',
                            'hyper',
                            'tricepPushdown',
                            'tricepRope'
                        ),
                        warmup: warmup(
                            'brisk cardio, shoulder mobility, scapular pulls and light rows.'
                        )
                    },

                    Thursday: {
                        title: 'Lower A',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk cardio, hip mobility and controlled leg work.'
                        )
                    },

                    Friday: {
                        title: 'Upper',
                        exercises: E(
                            'inclineBench',
                            'flatBench',
                            'butterflies',
                            'lowerChestCable',
                            'pullups',
                            'singleArmLat',
                            'lat',
                            'seated',
                            'overhead',
                            'lateral',
                            'dumbbellCurl',
                            'tricepPushdown'
                        ),
                        warmup: warmup(
                            'brisk cardio, shoulder mobility and light compound sets.'
                        )
                    },

                    Saturday: {
                        title: 'Lower B',
                        exercises: E(
                            'smith',
                            'sumo',
                            'legExtension',
                            'legPress',
                            'legCurl',
                            'calf',
                            'forearm'
                        ),
                        warmup: warmup(
                            'brisk cardio, hip mobility and controlled leg movements.'
                        )
                    }
                }
            }
        }
    }
};


// ============================================================
// LEVEL CONFIG
// ============================================================

const LEVEL_CONFIG = {

    beginner: {
        label: 'Beginner',
        plan: 'standard'
    },

    intermediate: {
        label: 'Intermediate',
        plan: 'weightloss'
    },

    expert: {
        label: 'Expert',
        plan: 'fourday'
    }
};


// ============================================================
// STATE
// ============================================================

let state = {

    level: 'beginner',

    workoutPlan: 'standard',

    goal: 'Build Muscle',

    completed: {},

    profile: {}
};


function loadState() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (saved) {

            const parsed =
                JSON.parse(saved);

            return {

                ...state,

                ...parsed,

                completed:
                    parsed.completed || {},

                profile:
                    parsed.profile || {}
            };
        }

    } catch (error) {

        console.error(
            'Unable to load saved state:',
            error
        );
    }

    return state;
}


state = loadState();


// ============================================================
// SELECTED VALUES
// ============================================================

let selectedGoal =
    state.goal || 'Build Muscle';

let selectedLevel =
    state.level || 'beginner';

let selectedWorkoutPlan =
    state.workoutPlan ||
    LEVEL_CONFIG[selectedLevel].plan;


// ============================================================
// CURRENT DAY
// ============================================================

function getCurrentDay() {

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    return days[
        new Date().getDay()
    ];
}

let currentDay =
    getCurrentDay();


// ============================================================
// SAVE STATE
// ============================================================

function saveState() {

    state.level =
        selectedLevel;

    state.workoutPlan =
        selectedWorkoutPlan;

    state.goal =
        selectedGoal;

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    } catch (error) {

        console.error(
            'Could not save state:',
            error
        );
    }
}


// ============================================================
// ACTIVE PLAN
// ============================================================

function getActivePlan() {

    return workoutPlans[
        selectedLevel
    ].plans[
        selectedWorkoutPlan
    ];
}


function getWorkoutDays() {

    return Object.keys(
        getActivePlan().days
    );
}


function getWorkout(day) {

    return getActivePlan()
        .days[day] || null;
}


function isRestDay(day) {

    return !getWorkout(day);
}


// ============================================================
// DATE / COMPLETION KEY
// ============================================================

function todayKey() {

    const d =
        new Date();

    return [

        d.getFullYear(),

        String(
            d.getMonth() + 1
        ).padStart(2, '0'),

        String(
            d.getDate()
        ).padStart(2, '0')

    ].join('-');
}


function completedKey(
    day,
    index
) {

    return [

        todayKey(),

        selectedLevel,

        selectedWorkoutPlan,

        day,

        index

    ].join('_');
}


// ============================================================
// TOAST
// ============================================================

function showToast(message) {

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add(
        'show'
    );

    setTimeout(
        () => {

            toast.classList.remove(
                'show'
            );

        },
        2200
    );
}


// ============================================================
// PAGE NAVIGATION
// ============================================================

function showPage(name) {

    pages.forEach(page => {

        page.classList.remove(
            'active'
        );

    });

    navItems.forEach(item => {

        item.classList.remove(
            'active'
        );

    });


    const targetPage =
        document.getElementById(
            name
        );

    const targetNav =
        document.querySelector(
            `[data-page="${name}"]`
        );


    if (targetPage) {

        targetPage.classList.add(
            'active'
        );

    }


    if (targetNav) {

        targetNav.classList.add(
            'active'
        );

    }


    if (name === 'workout') {

        renderLevelControls();

        renderDayButtons();

        renderWorkout(
            currentDay
        );

    }


    if (name === 'progress') {

        renderProgress();

    }

}


navItems.forEach(item => {

    item.addEventListener(
        'click',
        () => {

            showPage(
                item.dataset.page
            );

        }
    );

});


document
    .querySelectorAll(
        '[data-go]'
    )
    .forEach(button => {

        button.addEventListener(
            'click',
            () => {

                showPage(
                    button.dataset.go
                );

            }
        );

    });


const brandHome =
    document.getElementById(
        'brandHome'
    );

if (brandHome) {

    brandHome.addEventListener(
        'click',
        () => {

            showPage(
                'dashboard'
            );

        }
    );

}


// ============================================================
// GOAL SELECTION
// ============================================================

document
    .querySelectorAll(
        '.goal-option'
    )
    .forEach(button => {

        button.addEventListener(
            'click',
            () => {

                document
                    .querySelectorAll(
                        '.goal-option'
                    )
                    .forEach(option => {

                        option.classList.remove(
                            'selected'
                        );

                    });


                button.classList.add(
                    'selected'
                );


                selectedGoal =
                    button.dataset.goal;

                state.goal =
                    selectedGoal;

                saveState();

                updateDashboard();

                updateDiet();

            }
        );

    });


// ============================================================
// CALORIE CALCULATION
// ============================================================

function calculateCalories(
    weightKg,
    goal
) {

    const lb =
        weightKg * 2.2046226218;

    let multiplier = 15;


    if (goal === 'Lose Fat') {

        multiplier = 11;

    } else if (
        goal === 'Maintain'
    ) {

        multiplier = 15;

    } else if (
        goal === 'Athletic'
    ) {

        multiplier = 16;

    }


    return Math.max(
        1200,
        Math.round(
            lb * multiplier
        )
    );
}


// ============================================================
// MACROS
// ============================================================

function macroTargets(
    calories,
    weightKg,
    goal
) {

    const lb =
        weightKg * 2.2046226218;


    let proteinPerLb =
        0.8;


    if (
        goal === 'Build Muscle'
    ) {

        proteinPerLb = 1;

    } else if (
        goal === 'Lose Fat'
    ) {

        proteinPerLb = 0.9;

    }


    const protein =
        Math.round(
            lb * proteinPerLb
        );


    const fat =
        Math.round(
            calories * 0.275 / 9
        );


    const carbs =
        Math.max(
            0,
            Math.round(
                (
                    calories -
                    protein * 4 -
                    fat * 9
                ) / 4
            )
        );


    return {
        protein,
        carbs,
        fat
    };
}


// ============================================================
// PROFILE
// ============================================================

const generateBtn =
    document.getElementById(
        'generateBtn'
    );


if (generateBtn) {

    generateBtn.addEventListener(
        'click',
        () => {

            const name =
                document
                    .getElementById('name')
                    ?.value.trim();

            const age =
                Number(
                    document
                        .getElementById('age')
                        ?.value
                );

            const height =
                Number(
                    document
                        .getElementById('height')
                        ?.value
                );

            const weight =
                Number(
                    document
                        .getElementById('weight')
                        ?.value
                );

            const gender =
                document
                    .getElementById('gender')
                    ?.value;

            const activity =
                document
                    .getElementById('activity')
                    ?.value;


            if (
                !name ||
                !age ||
                !height ||
                !weight ||
                weight <= 0
            ) {

                showToast(
                    'Please enter name, age, height and weight.'
                );

                return;
            }


            const calories =
                calculateCalories(
                    weight,
                    selectedGoal
                );


            const macros =
                macroTargets(
                    calories,
                    weight,
                    selectedGoal
                );


            state.profile = {

                name,
                age,
                height,
                weight,
                gender,
                activity,

                calories,

                protein:
                    macros.protein,

                carbs:
                    macros.carbs,

                fat:
                    macros.fat
            };


            state.goal =
                selectedGoal;


            saveState();

            updateDashboard();

            updateDiet();


            const result =
                document.getElementById(
                    'profileResult'
                );


            if (result) {

                result.innerHTML = `

                    <strong>
                        ${name}'s plan is ready.
                    </strong>

                    Estimated target:

                    <strong>
                        ${calories.toLocaleString()}
                        kcal/day
                    </strong>

                    · Protein
                    ${macros.protein} g

                    · Carbs
                    ${macros.carbs} g

                    · Fat
                    ${macros.fat} g.

                `;

                result.classList.add(
                    'show'
                );
            }


            showToast(
                'Nutrition target calculated!'
            );


            setTimeout(
                () => {

                    showPage(
                        'dashboard'
                    );

                },
                500
            );

        }
    );

}


// ============================================================
// DASHBOARD
// ============================================================

function updateDashboard() {

    const profile =
        state.profile || {};

    const workout =
        getWorkout(
            currentDay
        );


    const dashDay =
        document.getElementById(
            'dashDay'
        );

    if (dashDay) {

        dashDay.textContent =
            currentDay;

    }


    const dashWorkoutTitle =
        document.getElementById(
            'dashWorkoutTitle'
        );

    if (dashWorkoutTitle) {

        dashWorkoutTitle.textContent =
            workout
                ? workout.title
                : 'Rest Day';

    }


    const heading =
        document.getElementById(
            'dashWorkoutHeading'
        );

    if (heading) {

        heading.textContent =
            workout
                ? `${currentDay} · ${workout.title}`
                : `${currentDay} · Rest Day`;

    }


    const dashCalories =
        document.getElementById(
            'dashCalories'
        );

    if (dashCalories) {

        dashCalories.textContent =
            profile.calories
                ? profile.calories.toLocaleString()
                : '—';

    }


    const dashGoal =
        document.getElementById(
            'dashGoal'
        );

    if (dashGoal) {

        dashGoal.textContent =
            state.goal ||
            'Build Muscle';

    }


    const dashExercises =
        document.getElementById(
            'dashExercises'
        );

    if (!dashExercises) return;


    if (!workout) {

        dashExercises.innerHTML = `

            <p class="muted">
                Rest day.
                Recovery and sleep support
                muscle growth.
            </p>

        `;

        return;
    }


    dashExercises.innerHTML =

        workout.exercises
            .map(
                (exercise, index) => {

                    const done =
                        !!state.completed[
                            completedKey(
                                currentDay,
                                index
                            )
                        ];


                    return `

                        <div class="exercise-row">

                            <b>
                                ${String(
                                    index + 1
                                ).padStart(2, '0')}
                            </b>

                            <div>

                                <strong>
                                    ${exercise[0]}
                                </strong>

                                <small>
                                    4 sets × 8 reps
                                </small>

                            </div>

                            <span>
                                ${
                                    done
                                        ? '✓'
                                        : '○'
                                }
                            </span>

                        </div>

                    `;

                }
            )
            .join('');
}


// ============================================================
// DIET
// ============================================================

function updateDiet() {

    const calories =
        state.profile?.calories;

    const weight =
        state.profile?.weight;

    const goal =
        state.goal ||
        'Build Muscle';


    const dietCalories =
        document.getElementById(
            'dietCalories'
        );

    const dietProtein =
        document.getElementById(
            'dietProtein'
        );

    const dietCarbs =
        document.getElementById(
            'dietCarbs'
        );

    const dietFat =
        document.getElementById(
            'dietFat'
        );

    const dietGoal =
        document.getElementById(
            'dietGoal'
        );

    const mealList =
        document.getElementById(
            'mealList'
        );


    if (!calories || !weight) {

        if (dietCalories)
            dietCalories.textContent = '—';

        if (dietProtein)
            dietProtein.textContent = '—';

        if (dietCarbs)
            dietCarbs.textContent = '—';

        if (dietFat)
            dietFat.textContent = '—';

        if (dietGoal)
            dietGoal.textContent = goal;


        if (mealList) {

            mealList.innerHTML = `

                <div class="card">

                    <p class="muted">

                        Complete your
                        Profile & Calories
                        first to generate
                        the food diet.

                    </p>

                </div>

            `;

        }

        return;
    }


    const macros =
        macroTargets(
            calories,
            weight,
            goal
        );


    if (dietCalories) {

        dietCalories.textContent =
            `${calories.toLocaleString()} kcal`;

    }


    if (dietProtein) {

        dietProtein.textContent =
            `${macros.protein} g`;

    }


    if (dietCarbs) {

        dietCarbs.textContent =
            `${macros.carbs} g`;

    }


    if (dietFat) {

        dietFat.textContent =
            `${macros.fat} g`;

    }


    if (dietGoal) {

        dietGoal.textContent =
            goal;

    }


    let level = 1;


    if (calories < 1700) {

        level = 1;

    } else if (
        calories < 2100
    ) {

        level = 2;

    } else if (
        calories < 2500
    ) {

        level = 3;

    } else if (
        calories < 2900
    ) {

        level = 4;

    } else {

        level = 5;

    }


    const plans = {

        1: {

            breakfast:
                '<b>Oats</b> 30 g • <b>Eggs</b> 2 • <b>Milk</b> 150 ml',

            snack:
                '<b>Fruit</b> 1 • <b>Curd</b> 100 g',

            lunch:
                '<b>Rice</b> 150 g cooked • <b>Dal</b> 100 g • <b>Chicken/Paneer</b> 100 g • <b>Vegetables</b> 100 g',

            preworkout:
                '<b>Banana</b> 1 • <b>Yogurt</b> 100 g',

            dinner:
                '<b>Roti</b> 2 • <b>Chicken/Paneer</b> 100 g • <b>Vegetables</b> 100 g'
        },

        2: {

            breakfast:
                '<b>Oats</b> 40 g • <b>Eggs</b> 2 • <b>Milk</b> 200 ml',

            snack:
                '<b>Fruit</b> 1 • <b>Curd</b> 125 g',

            lunch:
                '<b>Rice</b> 180 g cooked • <b>Dal</b> 120 g • <b>Chicken/Paneer</b> 120 g • <b>Vegetables</b> 150 g',

            preworkout:
                '<b>Banana</b> 1 • <b>Yogurt</b> 125 g',

            dinner:
                '<b>Roti</b> 2 • <b>Chicken/Paneer</b> 120 g • <b>Vegetables</b> 150 g'
        },

        3: {

            breakfast:
                '<b>Oats</b> 50 g • <b>Eggs</b> 3 • <b>Milk</b> 200 ml',

            snack:
                '<b>Fruit</b> 1 • <b>Curd</b> 150 g • <b>Nuts</b> 10 g',

            lunch:
                '<b>Rice</b> 200 g cooked • <b>Dal</b> 150 g • <b>Chicken/Paneer</b> 130 g • <b>Vegetables</b> 150 g',

            preworkout:
                '<b>Banana</b> 1 • <b>Yogurt</b> 150 g',

            dinner:
                '<b>Roti</b> 3 • <b>Chicken/Paneer</b> 130 g • <b>Vegetables</b> 150 g'
        },

        4: {

            breakfast:
                '<b>Oats</b> 60 g • <b>Eggs</b> 3 • <b>Milk</b> 250 ml • <b>Banana</b> 1',

            snack:
                '<b>Fruit</b> 1 • <b>Curd</b> 150 g • <b>Nuts</b> 15 g',

            lunch:
                '<b>Rice</b> 250 g cooked • <b>Dal</b> 150 g • <b>Chicken/Paneer</b> 150 g • <b>Vegetables</b> 200 g',

            preworkout:
                '<b>Banana</b> 1 • <b>Yogurt</b> 150 g • <b>Peanut Butter</b> 10 g',

            dinner:
                '<b>Roti</b> 3 • <b>Chicken/Paneer</b> 150 g • <b>Vegetables</b> 200 g'
        },

        5: {

            breakfast:
                '<b>Oats</b> 70 g • <b>Eggs</b> 3 • <b>Milk</b> 250 ml • <b>Banana</b> 1',

            snack:
                '<b>Fruit</b> 1–2 • <b>Curd</b> 200 g • <b>Nuts</b> 20 g',

            lunch:
                '<b>Rice</b> 300 g cooked • <b>Dal</b> 150 g • <b>Chicken/Paneer</b> 180 g • <b>Vegetables</b> 200 g',

            preworkout:
                '<b>Banana</b> 1 • <b>Yogurt</b> 150 g • <b>Peanut Butter</b> 15 g',

            dinner:
                '<b>Roti</b> 3–4 • <b>Chicken/Paneer</b> 180 g • <b>Vegetables</b> 200 g'
        }
    };


    const plan =
        plans[level];


    if (goal === 'Lose Fat') {

        plan.breakfast =
            level <= 2

                ? '<b>Oats</b> 30–40 g • <b>Eggs</b> 2 • <b>Milk</b> 150 ml'

                : '<b>Oats</b> 40–50 g • <b>Eggs</b> 2 • <b>Milk</b> 200 ml';


        plan.snack =
            '<b>Fruit</b> 1 • <b>Curd</b> 100–150 g';


        plan.lunch =
            level <= 2

                ? '<b>Rice</b> 120–150 g cooked • <b>Dal</b> 100 g • <b>Chicken/Paneer</b> 100 g • <b>Vegetables</b> 150 g'

                : '<b>Rice</b> 150–200 g cooked • <b>Dal</b> 120 g • <b>Chicken/Paneer</b> 120–150 g • <b>Vegetables</b> 200 g';


        plan.preworkout =
            '<b>Banana</b> 1 • <b>Yogurt</b> 100 g';


        plan.dinner =
            level <= 2

                ? '<b>Roti</b> 2 • <b>Chicken/Paneer</b> 100 g • <b>Vegetables</b> 150 g'

                : '<b>Roti</b> 2–3 • <b>Chicken/Paneer</b> 120–150 g • <b>Vegetables</b> 200 g';

    }


    const meals = [

        [
            '🌅',
            '08:00 AM',
            'Breakfast',
            plan.breakfast
        ],

        [
            '🍎',
            '11:00 AM',
            'Morning Snack',
            plan.snack
        ],

        [
            '🍛',
            '01:30 PM',
            'Lunch',
            plan.lunch
        ],

        [
            '☕',
            '05:00 PM',
            'Pre-Workout',
            plan.preworkout
        ],

        [
            '🌙',
            '08:30 PM',
            'Dinner',
            plan.dinner
        ]
    ];


    if (!mealList) return;


    mealList.innerHTML =
        meals
            .map(meal => `

                <div class="meal-card">

                    <span>
                        ${meal[0]}
                    </span>

                    <div>

                        <small>
                            ${meal[1]}
                        </small>

                        <h3>
                            ${meal[2]}
                        </h3>

                        <p class="food-portion">
                            ${meal[3]}
                        </p>

                    </div>

                </div>

            `)
            .join('');
}


// ============================================================
// PLAN DESCRIPTION
// ============================================================

function getPlanDescription() {

    if (
        selectedLevel === 'beginner'
    ) {

        return `
            Beginner 6-day plan:
            Chest, Back, Legs,
            Triceps + Biceps,
            Shoulders,
            Forearms + Abs + Cardio.
            Sunday is recovery.
        `;

    }


    if (
        selectedLevel === 'intermediate' &&
        selectedWorkoutPlan === 'weightloss'
    ) {

        return `
            Intermediate weight-loss plan:
            Back + Biceps, Legs,
            Chest + Triceps + Abs,
            repeated across the week.
        `;

    }


    if (
        selectedLevel === 'intermediate'
    ) {

        return `
            Intermediate muscle-growth plan:
            Chest + Triceps,
            Back + Biceps,
            Legs + Shoulders,
            Arms,
            Chest + Back,
            Abs + Shoulders.
        `;

    }


    if (
        selectedWorkoutPlan === 'fourday'
    ) {

        return `
            Expert 4-day muscle-gain plan:
            Upper A, Lower A,
            Upper B and Lower B.
        `;

    }


    return `
        Expert 5-day muscle-gain plan:
        Chest + Biceps,
        Back + Triceps,
        Lower A,
        Upper,
        Lower B.
    `;
}


// ============================================================
// LEVEL CONTROLS
// ============================================================

function renderLevelControls() {

    const levelSelect =
        document.getElementById(
            'workoutLevel'
        );

    const planSelect =
        document.getElementById(
            'workoutPlan'
        );


    if (
        !levelSelect ||
        !planSelect
    ) {

        return;

    }


    levelSelect.value =
        selectedLevel;


    const plans =
        workoutPlans[
            selectedLevel
        ].plans;


    planSelect.innerHTML =
        Object.entries(plans)
            .map(
                ([key, plan]) => `
                    <option value="${key}">
                        ${plan.label}
                    </option>
                `
            )
            .join('');


    planSelect.value =
        selectedWorkoutPlan;


    planSelect.disabled =
        selectedLevel === 'beginner';


    const description =
        document.getElementById(
            'levelDescription'
        );


    if (description) {

        description.textContent =
            getPlanDescription();

    }

}


// ============================================================
// WEEK BUTTONS
// ============================================================

function renderDayButtons() {

    const grid =
        document.querySelector(
            '.week-grid'
        );


    if (!grid) return;


    const days = [

        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'

    ];


    grid.innerHTML =
        days
            .map(day => {

                const workout =
                    getWorkout(day);


                const short =
                    day
                        .slice(0, 3)
                        .toUpperCase();


                return `

                    <button

                        class="
                            day-card
                            ${
                                day === currentDay
                                    ? 'selected-day'
                                    : ''
                            }
                            ${
                                !workout
                                    ? 'rest-day'
                                    : ''
                            }
                        "

                        data-day="${day}"

                        ${
                            !workout
                                ? 'disabled'
                                : ''
                        }

                    >

                        <small>
                            ${short}
                        </small>

                        <strong>
                            ${
                                workout
                                    ? workout.title
                                    : 'Rest'
                            }
                        </strong>

                        <span>
                            ${
                                workout
                                    ? '75–100 min'
                                    : 'Recovery'
                            }
                        </span>

                    </button>

                `;

            })
            .join('');


    grid
        .querySelectorAll(
            '.day-card:not([disabled])'
        )
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    renderWorkout(
                        button.dataset.day
                    );

                }
            );

        });
}


// ============================================================
// RENDER WORKOUT
// ============================================================

function renderWorkout(day) {

    currentDay =
        day;


    const workout =
        getWorkout(day);


    renderLevelControls();

    renderDayButtons();


    const eyebrow =
        document.getElementById(
            'workoutEyebrow'
        );

    const title =
        document.getElementById(
            'workoutTitle'
        );

    const duration =
        document.getElementById(
            'workoutDuration'
        );

    const warmupBox =
        document.getElementById(
            'warmupBox'
        );

    const exerciseTable =
        document.getElementById(
            'exerciseTable'
        );


    if (
        !eyebrow ||
        !title ||
        !duration ||
        !warmupBox ||
        !exerciseTable
    ) {

        return;

    }


    if (!workout) {

        eyebrow.textContent =
            `${currentDay.toUpperCase()} · REST DAY`;

        title.textContent =
            'Rest & Recovery';

        duration.textContent =
            '💤 Recovery';


        warmupBox.innerHTML = `

            <strong>
                💚 RECOVERY DAY
            </strong>

            <br><br>

            No strength workout today.
            Focus on sleep, hydration,
            light walking and recovery.

        `;


        exerciseTable.innerHTML = `

            <div class="rest-message">

                <strong>
                    Rest day
                </strong>

                <p>
                    Recovery is part of the plan.
                    Your muscles need rest to adapt
                    and grow.
                </p>

            </div>

        `;

        return;

    }


    eyebrow.textContent =
        `${currentDay.toUpperCase()} · ${workout.title.toUpperCase()}`;


    title.textContent =
        workout.title;


    duration.textContent =
        '⏱ 75–100 min';


    warmupBox.innerHTML = `

        <strong>
            🔥 DAILY WARM-UP · 10–15 MIN
        </strong>

        <br><br>

        ${workout.warmup}

    `;


    exerciseTable.innerHTML =

        workout.exercises
            .map(
                (exercise, index) => {

                    const done =
                        !!state.completed[
                            completedKey(
                                currentDay,
                                index
                            )
                        ];


                    return `

                        <div
                            class="
                                exercise-card
                                ${
                                    done
                                        ? 'completed-card'
                                        : ''
                                }
                            "
                        >

                            <div class="exercise-num">
                                ${index + 1}
                            </div>


                            <div class="exercise-info">

                                <h3>
                                    ${exercise[0]}
                                </h3>

                                <p>
                                    4 SETS × 8 REPS
                                </p>

                            </div>


                            <div class="exercise-demo">

                                <img
                                    src="${exercise[1]}"
                                    alt="${exercise[0]} demonstration"
                                    onerror="
                                        this.onerror=null;
                                        this.src='assets/exercise_fallback.svg';
                                    "
                                >

                            </div>


                            <div class="exercise-instructions">

                                <b>
                                    FOCUS
                                </b>

                                <br>

                                ${exercise[2]}

                                <br><br>

                                <b>
                                    FORM
                                </b>

                                <br>

                                ${exercise[3]}

                            </div>


                            <div class="complete-control">

                                <button
                                    class="
                                        check-btn
                                        ${
                                            done
                                                ? 'done'
                                                : ''
                                        }
                                    "
                                    data-index="${index}"
                                >
                                    ${
                                        done
                                            ? '✓'
                                            : '○'
                                    }
                                </button>

                                <small>
                                    ${
                                        done
                                            ? 'COMPLETED'
                                            : 'MARK COMPLETE'
                                    }
                                </small>

                            </div>

                        </div>

                    `;

                }
            )
            .join('');


    if (workout.cardio) {

        exerciseTable.insertAdjacentHTML(
            'beforeend',

            `

                <div class="cardio-box">

                    <strong>
                        ❤️ CARDIO · 15–25 MIN
                    </strong>

                    <span>
                        ${workout.cardio}
                    </span>

                </div>

            `
        );

    }


    exerciseTable
        .querySelectorAll(
            '.check-btn'
        )
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    const key =
                        completedKey(
                            currentDay,
                            index
                        );


                    state.completed[key] =
                        !state.completed[key];


                    saveState();


                    renderWorkout(
                        currentDay
                    );


                    updateDashboard();

                    renderProgress();


                    showToast(

                        state.completed[key]

                            ? 'Exercise completed! Progress updated.'

                            : 'Exercise unchecked.'

                    );

                }
            );

        });

}


// ============================================================
// TODAY STATS
// ============================================================

function getTodayStats() {

    const workout =
        getWorkout(
            currentDay
        );


    if (!workout) {

        return {
            done: 0,
            total: 0,
            percent: 0
        };

    }


    const total =
        workout.exercises.length;


    const done =
        workout.exercises.filter(
            (_, index) =>
                !!state.completed[
                    completedKey(
                        currentDay,
                        index
                    )
                ]
        ).length;


    return {

        done,

        total,

        percent:
            total
                ? Math.round(
                    done /
                    total *
                    100
                )
                : 0

    };

}


// ============================================================
// STREAK SYSTEM
// ============================================================

function streakDateKey(date) {

    return [

        date.getFullYear(),

        String(
            date.getMonth() + 1
        ).padStart(2, '0'),

        String(
            date.getDate()
        ).padStart(2, '0')

    ].join('-');

}


function getDayNameFromDate(date) {

    return [

        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'

    ][
        date.getDay()
    ];

}


// ------------------------------------------------------------
// FIND FULLY COMPLETED WORKOUT DAYS
// ------------------------------------------------------------

function getFullyCompletedWorkoutDates() {

    const grouped = {};

    const dates =
        new Set();


    Object.entries(
        state.completed || {}
    ).forEach(
        ([key, value]) => {

            if (!value) return;


            const parts =
                key.split('_');


            if (
                parts.length < 5
            ) {

                return;

            }


            const date =
                parts[0];

            const level =
                parts[1];

            const plan =
                parts[2];

            const day =
                parts[3];

            const index =
                Number(parts[4]);


            if (
                !/^\d{4}-\d{2}-\d{2}$/
                    .test(date)
            ) {

                return;

            }


            if (
                level !== selectedLevel ||
                plan !== selectedWorkoutPlan
            ) {

                return;

            }


            if (
                Number.isNaN(index)
            ) {

                return;

            }


            const workout =
                workoutPlans
                    ?. [level]
                    ?.plans
                    ?. [plan]
                    ?.days
                    ?. [day];


            if (!workout) return;


            const groupKey =
                `${date}_${day}`;


            if (
                !grouped[groupKey]
            ) {

                grouped[groupKey] = {

                    date,

                    day,

                    indexes:
                        new Set(),

                    total:
                        workout
                            .exercises
                            .length

                };

            }


            grouped[groupKey]
                .indexes
                .add(index);

        }
    );


    Object.values(
        grouped
    ).forEach(
        item => {

            if (
                item.indexes.size !==
                item.total
            ) {

                return;

            }


            for (
                let i = 0;
                i < item.total;
                i++
            ) {

                if (
                    !item.indexes.has(i)
                ) {

                    return;

                }

            }


            dates.add(
                item.date
            );

        }
    );


    return dates;

}


// ------------------------------------------------------------
// CHECK IF DATE IS A SCHEDULED WORKOUT
// ------------------------------------------------------------

function isScheduledWorkoutDate(
    date
) {

    const day =
        getDayNameFromDate(
            date
        );


    return !!getWorkout(
        day
    );

}


// ------------------------------------------------------------
// CALCULATE STREAK
// ------------------------------------------------------------

function calculateWorkoutStreak() {

    const completedDates =
        getFullyCompletedWorkoutDates();


    if (
        completedDates.size === 0
    ) {

        return 0;

    }


    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    let cursor =
        new Date(today);


    /*
     * If today is a scheduled workout but
     * is not completed yet, start checking
     * from yesterday.
     */

    if (
        isScheduledWorkoutDate(cursor) &&
        !completedDates.has(
            streakDateKey(cursor)
        )
    ) {

        cursor.setDate(
            cursor.getDate() - 1
        );

    }


    let streak = 0;


    while (true) {

        /*
         * Rest days do NOT break the streak.
         */

        if (
            !isScheduledWorkoutDate(
                cursor
            )
        ) {

            cursor.setDate(
                cursor.getDate() - 1
            );

            continue;

        }


        if (
            !completedDates.has(
                streakDateKey(cursor)
            )
        ) {

            break;

        }


        streak++;


        cursor.setDate(
            cursor.getDate() - 1
        );

    }


    return streak;

}


// ------------------------------------------------------------
// GET CURRENT WEEK
// ------------------------------------------------------------

function getStreakWeek() {

    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    const sunday =
        new Date(today);


    sunday.setDate(
        today.getDate() -
        today.getDay()
    );


    return Array.from(
        {
            length: 7
        },
        (_, index) => {

            const date =
                new Date(
                    sunday
                );


            date.setDate(
                sunday.getDate() +
                index
            );


            return date;

        }
    );

}


// ------------------------------------------------------------
// RENDER STREAK
// ------------------------------------------------------------

function renderStreak() {

    const count =
        document.getElementById(
            'streakCount'
        );

    const message =
        document.getElementById(
            'streakMessage'
        );

    const card =
        document.querySelector(
            '.streak-card'
        );


    if (
        !count ||
        !message ||
        !card
    ) {

        return;

    }


    const completedDates =
        getFullyCompletedWorkoutDates();


    const streak =
        calculateWorkoutStreak();


    const week =
        getStreakWeek();


    const today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    count.textContent =
        streak;


    document
        .querySelectorAll(
            '.streak-day'
        )
        .forEach(
            (element, index) => {

                const date =
                    week[index];


                const key =
                    streakDateKey(
                        date
                    );


                const scheduled =
                    isScheduledWorkoutDate(
                        date
                    );


                element.classList.remove(
                    'completed',
                    'today',
                    'future',
                    'rest'
                );


                if (
                    scheduled &&
                    completedDates.has(
                        key
                    )
                ) {

                    element.classList.add(
                        'completed'
                    );

                }


                if (
                    key ===
                    streakDateKey(
                        today
                    )
                ) {

                    element.classList.add(
                        'today'
                    );

                }


                if (
                    date > today
                ) {

                    element.classList.add(
                        'future'
                    );

                }


                if (!scheduled) {

                    element.classList.add(
                        'rest'
                    );

                }

            }
        );


    card.classList.remove(
        'perfect'
    );


    const scheduledThisWeek =
        week.filter(
            date =>
                date <= today &&
                isScheduledWorkoutDate(
                    date
                )
        );


    const completedThisWeek =
        scheduledThisWeek.filter(
            date =>
                completedDates.has(
                    streakDateKey(
                        date
                    )
                )
        ).length;


    const todayScheduled =
        isScheduledWorkoutDate(
            today
        );


    const todayCompleted =
        completedDates.has(
            streakDateKey(
                today
            )
        );


    if (
        scheduledThisWeek.length > 0 &&
        completedThisWeek ===
        scheduledThisWeek.length
    ) {

        card.classList.add(
            'perfect'
        );


        message.innerHTML = `

            <strong>
                🔥 Perfect Streak!
            </strong>

            All scheduled workouts
            this week are complete.

        `;

    }

    else if (
        todayScheduled &&
        todayCompleted
    ) {

        message.innerHTML = `

            Great work! 🔥
            Your streak is still going.

        `;

    }

    else if (
        streak > 0 &&
        todayScheduled
    ) {

        message.innerHTML = `

            Complete today's workout
            to keep your

            <strong>
                ${streak} day streak!
            </strong>

        `;

    }

    else if (
        !todayScheduled &&
        streak > 0
    ) {

        message.innerHTML = `

            Recovery day.
            Your

            <strong>
                ${streak} day streak
            </strong>

            is safe.

        `;

    }

    else {

        message.innerHTML = `

            Complete your first full
            workout to start your

            <strong>
                streak!
            </strong>

        `;

    }

}


// ============================================================
// PROGRESS
// ============================================================

function renderProgress() {

    const stats =
        getTodayStats();


    const progressToday =
        document.getElementById(
            'progressToday'
        );

    const progressPercent =
        document.getElementById(
            'progressPercent'
        );

    const progressPercent2 =
        document.getElementById(
            'progressPercent2'
        );

    const progressBar =
        document.getElementById(
            'progressBar'
        );

    const progressMessage =
        document.getElementById(
            'progressMessage'
        );

    const progressDetail =
        document.getElementById(
            'progressDetail'
        );


    if (progressToday) {

        progressToday.textContent =
            `${stats.done} / ${stats.total}`;

    }


    if (progressPercent) {

        progressPercent.textContent =
            `${stats.percent}%`;

    }


    if (progressPercent2) {

        progressPercent2.textContent =
            `${stats.percent}%`;

    }


    if (progressBar) {

        progressBar.style.width =
            `${stats.percent}%`;

    }


    if (progressMessage) {

        progressMessage.textContent =

            stats.total === 0

                ? 'Rest day'

                : stats.percent === 100

                    ? 'All exercises completed!'

                    : stats.done === 0

                        ? 'No exercises completed yet'

                        : `${stats.done} exercises completed`;

    }


    if (progressDetail) {

        progressDetail.textContent =

            stats.total === 0

                ? 'Recovery day. No workout completion is required.'

                : stats.percent === 100

                    ? 'Excellent work. All exercises for the selected day are complete.'

                    : `Complete ${
                        stats.total -
                        stats.done
                    } more exercise${
                        stats.total -
                        stats.done !== 1
                            ? 's'
                            : ''
                    } to reach 100%.`;

    }


    const totalCompleted =
        Object.values(
            state.completed
        )
        .filter(Boolean)
        .length;


    const weeklyCompleted =
        document.getElementById(
            'weeklyCompleted'
        );


    if (weeklyCompleted) {

        weeklyCompleted.textContent =
            totalCompleted;

    }


    const historyList =
        document.getElementById(
            'historyList'
        );


    if (historyList) {

        const days = [

            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'

        ];


        historyList.innerHTML =
            days
                .map(day => {

                    const workout =
                        getWorkout(day);


                    if (!workout) {

                        return '';

                    }


                    const total =
                        workout
                            .exercises
                            .length;


                    const done =
                        workout.exercises
                            .filter(
                                (_, index) =>
                                    !!state.completed[
                                        completedKey(
                                            day,
                                            index
                                        )
                                    ]
                            )
                            .length;


                    let status = '';


                    if (
                        done === total
                    ) {

                        status =
                            'done';

                    } else if (
                        done > 0
                    ) {

                        status =
                            'partial';

                    }


                    return `

                        <div
                            class="
                                history-day
                                ${status}
                            "
                        >

                            <strong>
                                ${day.slice(0, 3)}
                            </strong>

                            <small>
                                ${done}/${total}
                                complete
                            </small>

                        </div>

                    `;

                })
                .join('');

    }


    // IMPORTANT:
    // Update streak every time progress changes.

    renderStreak();

}


// ============================================================
// HYDRATE / LOAD PROFILE
// ============================================================

function hydrate() {

    const profile =
        state.profile || {};


    const name =
        document.getElementById(
            'name'
        );

    const age =
        document.getElementById(
            'age'
        );

    const height =
        document.getElementById(
            'height'
        );

    const weight =
        document.getElementById(
            'weight'
        );

    const gender =
        document.getElementById(
            'gender'
        );

    const activity =
        document.getElementById(
            'activity'
        );


    if (name)
        name.value =
            profile.name || '';


    if (age)
        age.value =
            profile.age || '';


    if (height)
        height.value =
            profile.height || '';


    if (weight)
        weight.value =
            profile.weight || '';


    if (gender)
        gender.value =
            profile.gender || 'male';


    if (activity)
        activity.value =
            profile.activity || '1.55';


    document
        .querySelectorAll(
            '.goal-option'
        )
        .forEach(button => {

            button.classList.toggle(

                'selected',

                button.dataset.goal ===
                selectedGoal

            );

        });


    updateDashboard();

    updateDiet();

    renderLevelControls();

    renderDayButtons();

    renderWorkout(
        currentDay
    );

    renderProgress();

}


// ============================================================
// IMAGE MODAL
// ============================================================

const imageModal =
    document.getElementById(
        'imageModal'
    );

const fullWorkoutImage =
    document.getElementById(
        'fullWorkoutImage'
    );

const closeImageModal =
    document.getElementById(
        'closeImageModal'
    );


if (
    imageModal &&
    fullWorkoutImage
) {

    document.addEventListener(
        'click',
        event => {

            if (
                event.target.matches(
                    '.exercise-demo img'
                )
            ) {

                fullWorkoutImage.src =
                    event.target.src;

                fullWorkoutImage.alt =
                    event.target.alt ||
                    'Full workout demonstration';

                imageModal.classList.add(
                    'show'
                );

                document.body.style.overflow =
                    'hidden';

            }

        }
    );

}


function closeWorkoutImage() {

    if (!imageModal) return;

    imageModal.classList.remove(
        'show'
    );

    document.body.style.overflow =
        '';

}


if (closeImageModal) {

    closeImageModal.addEventListener(
        'click',
        closeWorkoutImage
    );

}


if (imageModal) {

    imageModal.addEventListener(
        'click',
        event => {

            if (
                event.target ===
                imageModal
            ) {

                closeWorkoutImage();

            }

        }
    );

}


document.addEventListener(
    'keydown',
    event => {

        if (
            event.key === 'Escape' &&
            imageModal &&
            imageModal.classList.contains(
                'show'
            )
        ) {

            closeWorkoutImage();

        }

    }
);


// ============================================================
// WORKOUT LEVEL SELECTION
// ============================================================

function setWorkoutSelection(
    level,
    plan
) {

    selectedLevel =
        level;


    selectedWorkoutPlan =
        plan ||
        LEVEL_CONFIG[level].plan;


    state.level =
        selectedLevel;

    state.workoutPlan =
        selectedWorkoutPlan;


    saveState();


    const days =
        getWorkoutDays();


    if (
        !days.includes(
            currentDay
        )
    ) {

        currentDay =
            days[0];

    }


    renderLevelControls();

    renderDayButtons();

    renderWorkout(
        currentDay
    );

    updateDashboard();

    renderProgress();

}


const workoutLevel =
    document.getElementById(
        'workoutLevel'
    );


if (workoutLevel) {

    workoutLevel.addEventListener(
        'change',
        event => {

            const level =
                event.target.value;


            setWorkoutSelection(
                level,
                LEVEL_CONFIG[level].plan
            );

        }
    );

}


const workoutPlan =
    document.getElementById(
        'workoutPlan'
    );


if (workoutPlan) {

    workoutPlan.addEventListener(
        'change',
        event => {

            setWorkoutSelection(
                selectedLevel,
                event.target.value
            );

        }
    );

}


// ============================================================
// INITIALIZE
// ============================================================

hydrate();