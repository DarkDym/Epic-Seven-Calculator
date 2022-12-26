#--------------SCREEN-------------------
import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
# from kivy.uix.checkbox import CheckBox
from kivy.uix.dropdown import DropDown
from kivy.base import runTouchApp
from kivy.uix.image import Image, AsyncImage
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.lang import Builder
from kivy.core.window import Window
from kivy.properties import StringProperty, ObjectProperty
#--------------SCREEN-------------------

#--------------JSON----------------------
import json
#--------------JSON----------------------

class Main_GridLayout(GridLayout):
    def __init__(self, **kwargs):
        super(Main_GridLayout,self).__init__(**kwargs)

        self.main_screen = Screen(name="main_screen")
        self.new_screen = Screen(name="new_screen")

        self.add_widget(self.main_screen)
        self.add_widget(self.new_screen)

        self.cols = 1

        self.top_grid = GridLayout()
        self.top_grid.cols = 2

        self.top_grid.add_widget(Label(text="Robot Name: "))
        self.robot_name = TextInput(multiline=False)
        self.top_grid.add_widget(self.robot_name)

        self.top_grid.add_widget(Label(text="Quantity: "))
        self.qnt = TextInput(multiline=False)
        self.top_grid.add_widget(self.qnt)

        self.add_widget(self.top_grid)

        # self.topics = DropDown()
        # self.add_widget(self.topics)

        # self.img1 = Image(source='./imgs/Achates-Icon-1.png')
        # self.top_grid.add_widget(self.img1)

        self.submit = Button(text="Submit",font_size=20)
        self.submit.bind(on_press=self.press)
        self.add_widget(self.submit)

    def press(self, instance):
        robot_name = self.robot_name.text
        qnt = self.qnt.text
        self.robot_name.text = ""
        self.qnt.text = ""

class MainScreen(Screen):
    # pass        

    def print_information(self):
        print("NAME: " + str(self.manager.dict["name"]))
        print("ATTACK: " + str(self.manager.dict["attack"]))
        print("HEALTH: " + str(self.manager.dict["health"]))
        print("DEFENSE: " + str(self.manager.dict["defense"]))
        print("SPEED: " + str(self.manager.dict["speed"]))

class SelectCharScreen(Screen):
    char_name = []
    buttons = []
    buttons_id = []
    chars_db = 0
    char_dict = {}
    already_added = False
    def on_enter(self, *args):
        if not self.already_added:
            with open('new_chars.json', 'r') as char_imgs_db:
                self.chars_db = json.load(char_imgs_db)
            for i in range(0,len(self.chars_db["chars"])):
                self.char_name.append(self.chars_db["chars"][i]["name"])
                # button = Button(background_normal = "./imgs/"+chars_db["chars"][i]["icon"])
                self.buttons.append(Button(background_normal = "./imgs/"+self.chars_db["chars"][i]["icon"], ids = {"char":self.chars_db["chars"][i]["name"]}, on_press=self.print_name, on_release=self.get_informations))
                # char_img = Image(source="./imgs/Achates-Icon-1.png")
                # self.ids.char = chars_db["chars"][i]["name"]
                # print(chars_db["chars"][i]["name"])
                # char_name_t = chars_db["chars"][i]["name"]
                # button.bind(on_press = self.print_name)
                # self.ids.char_s.add_widget(button)
                # self.buttons[i].bind(on_press = self.print_name)
                self.ids.char_s.add_widget(self.buttons[i])
            # print(self.buttons)
            self.already_added = True
    
    def print_name(self, instance):
        # print("CHAR NAME: " + str(self.ids.items()))
        # print("TESTE: " + str(self.char))
        print(instance.ids['char'])
    
    def get_informations(self, instance):
        # print("PERSONAGEM QUE FOI ESCOLHIDO: " + str(instance.ids['char']))
        # print("QUANTIDADE DE PERSONAGENS: " + str(len(self.chars_db["chars"])))
        for i in range(0,len(self.chars_db["chars"])):
            # print(self.chars_db["chars"][i]["name"])
            if instance.ids['char'] == self.chars_db["chars"][i]["name"]:
                self.char_dict = {
                    "name": self.chars_db["chars"][i]["name"],
                    "attack": self.chars_db["chars"][i]["stats"]["attack"],
                    "health": self.chars_db["chars"][i]["stats"]["health"],
                    "defense": self.chars_db["chars"][i]["stats"]["defense"],
                    "speed": self.chars_db["chars"][i]["stats"]["speed"]
                }
                break
        if self.manager.current == "select_char_screen":
            self.manager.current = "build_equip_screen"
            self.manager.dict = self.char_dict
            # for i in range(0,len(self.buttons)):
                # self.remove_widget(self.buttons[i])
                # print(self.chars_db["chars"][i]["name"])
                # print(self.chars_db["chars"][i]["stats"]["attack"])
                # print(self.chars_db["chars"][i]["stats"]["health"])
                # print(self.chars_db["chars"][i]["stats"]["defense"])
                # print(self.chars_db["chars"][i]["stats"]["speed"])
    
class BuildEquipScreen(Screen):
    # pass
    
    equips_types = ["sword","helmet","chest","necklace","ring","boot"]
    types = ["ATK","HP","DEF","SPD","CR","CD","EFF","EFR"]
    s_t = ["attack","defense","health","speed","cr","cd","eff","efr"]
    
    def on_enter(self, *args):
        # tst = StringProperty(str("./full_imgs/") + self.manager.dict["name"] + str("-Portrait.png"))
        test_img = Image(source=str("./full_imgs/") + self.manager.dict["name"] + str("-Portrait.png"))
        self.ids.portrait.source = str("./full_imgs/") + self.manager.dict["name"] + str("-Portrait.png")
        for i in range(0,4):
            self.ids[str(self.s_t[i])+'_result'].text = str(self.manager.dict[str(self.s_t[i])])
    def calculate_stats(self):
        
        attack = []
        defense = []
        speed = []
        health = []
        cr = []
        cd = []
        eff = []
        efr = []

        for e_types in self.equips_types:
            for i in range(1,5):
                if (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[0] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    attack.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                    # print("ATK FROM SUB_"+str(i)+": "+str(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[1] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    health.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[2] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    defense.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[3] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    speed.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[4] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    cr.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[5] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    cd.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[6] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    eff.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
                elif (self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text == self.types[7] and self.ids[str(e_types)+'_sub'+str(i)+'_type'].text == "FLAT"):
                    # print(self.ids[str(e_types)+'_sub'+str(i)+'_stat_type'].text)
                    efr.append(int(self.ids[str(e_types)+'_sub'+str(i)+'_input'].text))
        stats = []
        stats.append(attack)
        stats.append(defense)
        stats.append(health)
        stats.append(speed)
        stats.append(cr)
        stats.append(cd)
        stats.append(eff)
        stats.append(efr)
        

        # print("NAME: " + str(self.manager.dict["name"]))
        # print("ATTACK: " + str(self.manager.dict["attack"]))

        attack.append(int(self.manager.dict["attack"]))
        attack.append(int(self.ids.sword_main_input.text))

        health.append(int(self.manager.dict["health"]))
        health.append(int(self.ids.helmet_main_input.text))

        defense.append(int(self.manager.dict["defense"]))
        defense.append(int(self.ids.chest_main_input.text))

        speed.append(int(self.manager.dict["speed"]))

        # result = 0
        # for i in range(0,len(attack)):
            # result += attack[i]
        # print("ATTACK RESULT: " + str(result))
        # self.ids.attack_result.text = str(self.manager.dict["attack"])
        # self.ids.attack_result.text = str(result)
        
        # print("HEALTH: " + str(self.manager.dict["health"]))
        # print("DEFENSE: " + str(self.manager.dict["defense"]))
        # print("SPEED: " + str(self.manager.dict["speed"]))

        index = 0
        for s in stats:
            result = 0
            for i in range(0,len(s)):
                result += s[i]
            self.ids[str(self.s_t[index])+'_result'].text = str(result)
            index+=1
            
            

class MyScreenManager(ScreenManager):
    # pass
    def __init__(self, **kwargs):
        super(MyScreenManager, self).__init__(**kwargs)

        # self.main_screen = Screen(name="main_screen")
        # self.select_char_screen = Screen(name="select_char_screen")

        # self.add_widget(self.main_screen)
        # self.add_widget(self.select_char_screen)

        # grid = Main_GridLayout()
        # grid.b4.bind(on_press=self.change_screen)
        # self.main_screen.add_widget(grid)

    def change_screen(self, *args):
        self.current = "select_char_screen"

kv = Builder.load_file('new_window.kv')

class main_gui(App):
    def build(self):
        Window.maximize()
        return kv
#CLASSE UTILIZADA PARA FILTRAR OS DADOS INICIAIS
# JA FOI REALIZADA A LIMPEZA E CRIADO O ARQUIVO
# 'new_chars.json'. ASSIM ESTA CLASSE NÃO É MAIS
# ÚTIL PARA O FUNCIONAMENTO DO SISTEMA.    
class limpa_csv():
    
    def __init__(self):
        file_name = "chars.json"
        new_file = "new_chars.json"
        char_aux = []
        all_chars_dict = []
        
        with open(file_name, 'r') as all_json_chars:
            chars_db = json.load(all_json_chars)
        
        
        for i in range(0,len(chars_db["chars"])):
            # print(chars_db["chars"][i])
            
            icon_name = chars_db["chars"][i]["icon"].split('/')
            # print(icon_name[len(icon_name)-1])
            
            
            if (chars_db["chars"][i]["stats"] != None):
                new_char_single = {
                    "name" : chars_db["chars"][i]["name"],
                    "icon" : icon_name[len(icon_name)-1],
                    "rarity" : chars_db["chars"][i]["rarity"],
                    "class" : chars_db["chars"][i]["class"],
                    "element" : chars_db["chars"][i]["element"],
                    "horoscope" : chars_db["chars"][i]["horoscope"],
                    "stats" : {
                                "attack" : chars_db["chars"][i]["stats"]["attack"],
                                "health" : chars_db["chars"][i]["stats"]["health"],
                                "defense" : chars_db["chars"][i]["stats"]["defense"],
                                "speed" : chars_db["chars"][i]["stats"]["speed"]
                            }
                }
                all_chars_dict.append(new_char_single)

        with open(new_file, 'w') as new_json_chars:
            json.dump(all_chars_dict,new_json_chars)

class account_json():
    def __init__(self):
        pass

    def verify_account(self):
        #Open system file;
            #if file found;
                #Open account screen
            #else
                #call create_account
        pass
    
    def create_account(self):
        #Create json account
        #with open("account_file.json", 'w') as new_account_file:
            #dict={}
            #json.dump(dict,new_account_file)
        pass


if __name__ == '__main__':
    main_gui().run()
    # limpa_csv()