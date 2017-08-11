export const requestBody = (content: string) => {
  const body = {
    "document": content,
    "format": "json2",
    "documentParser": "PLAIN",
    "config": {
      "lang": "ja",
      "validators": {
        "CommaNumber": {
          "properties": {
            "max_num": "3"
          }
        },
        "DoubleNegative": {},
        "DoubledConjunctiveParticleGa": {},
        "DoubledJoshi": {
          "properties": {
            "dict": "",
            "list": "",
            "min_interval": "1"
          }
        },
        "DoubledWord": {
          "properties": {
            "dict": "",
            "list": "",
            "min_len": "3"
          }
        },
        "DuplicatedSection": {
          "properties": {
            "threshold": "0.9"
          }
        },
        "EmptySection": {},
        "FrequentSentenceStart": {
          "properties": {
            "leading_word_limit": "3",
            "min_sentence_count": "5",
            "percentage_threshold": "25"
          }
        },
        "GappedSection": {},
        "HankakuKana": {},
        "HeaderLength": {
          "properties": {
            "max_len": "70",
            "min_level": "3"
          }
        },
        "Hyphenation": {
          "properties": {
            "dict": "",
            "list": ""
          }
        },
        "InvalidExpression": {
          "properties": {
            "dict": "",
            "list": ""
          }
        },
        "InvalidSymbol": {},
        "JapaneseAmbiguousNounConjunction": {
          "properties": {
            "dict": "",
            "list": ""
          }
        },
        "JapaneseAnchorExpression": {
          "properties": {
            "mode": "numeric"
          }
        },
        "JapaneseBrokenExpression": {},
        "JapaneseJoyoKanji": {},
        "JapaneseNumberExpression": {
          "properties": {
            "mode": "numeric"
          }
        },
        "JapaneseStyle": {},
        "JavaScript": {
          "properties": {
            "script-path": "js"
          }
        },
        "KatakanaEndHyphen": {
          "properties": {
            "dict": "",
            "list": ""
          }
        },
        "KatakanaSpellCheck": {
          "properties": {
            "dict": "",
            "disable-default": "false",
            "list": "",
            "max_ignore_len": "3",
            "min_freq": "5",
            "min_ratio": "0.3"
          }
        },
        "ListLevel": {
          "properties": {
            "max_level": "5"
          }
        },
        "LongKanjiChain": {
          "properties": {
            "dict": "",
            "list": "",
            "max_len": "5"
          }
        },
        "NumberFormat": {
          "properties": {
            "decimal_delimiter_is_comma": "false",
            "ignore_years": "true"
          }
        },
        "Okurigana": {},
        "ParagraphNumber": {
          "properties": {
            "max_num": "5"
          }
        },
        "ParagraphStartWith": {
          "properties": {
            "start_from": ""
          }
        },
        "ParenthesizedSentence": {
          "properties": {
            "max_count": "1",
            "max_length": "3",
            "max_nesting_level": "1"
          }
        },
        "SectionLength": {
          "properties": {
            "max_num": "1000"
          }
        },
        "SectionLevel": {
          "properties": {
            "max_num": "6"
          }
        },
        "SentenceLength": {
          "properties": {
            "max_len": "120"
          }
        },
        "SpaceBetweenAlphabeticalWord": {
          "properties": {
            "forbidden": "false",
            "skip_after": "",
            "skip_before": ""
          }
        },
        "Spelling": {
          "properties": {
            "dict": "",
            "list": ""
          }
        },
        "SuccessiveSentence": {
          "properties": {
            "dist": "3",
            "min_len": "5"
          }
        },
        "SuccessiveWord": {},
        "SuggestExpression": {
          "properties": {
            "dict": "",
            "map": "{}"
          }
        },
        "SymbolWithSpace": {},
        "WeakExpression": {},
        "WordFrequency": {
          "properties": {
            "deviation_factor": "3.0",
            "min_word_count": "200"
          }
        },
        "WordNumber": {
          "properties": {
            "max_num": "30"
          }
        }
      },
      "symbols": {
        "AMPERSAND": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＆"
        },
        "ASTERISK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＊"
        },
        "AT_MARK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＠"
        },
        "BACKSLASH": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "\\",
          "value": "¥"
        },
        "CIRCUMFLEX_ACCENT": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＾"
        },
        "COLON": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "："
        },
        "COMMA": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": ",，",
          "value": "、"
        },
        "DIGIT_EIGHT": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "8"
        },
        "DIGIT_FIVE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "5"
        },
        "DIGIT_FOUR": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "4"
        },
        "DIGIT_NINE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "9"
        },
        "DIGIT_ONE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "1"
        },
        "DIGIT_SEVEN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "7"
        },
        "DIGIT_SIX": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "6"
        },
        "DIGIT_THREE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "3"
        },
        "DIGIT_TWO": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "2"
        },
        "DIGIT_ZERO": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "0"
        },
        "DOLLAR_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "$",
          "value": "＄"
        },
        "EQUAL_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＝"
        },
        "EXCLAMATION_MARK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "!",
          "value": "！"
        },
        "FULL_STOP": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": ".．",
          "value": "。"
        },
        "GREATER_THAN_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＞"
        },
        "HYPHEN_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "ー"
        },
        "LEFT_CURLY_BRACKET": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "｛"
        },
        "LEFT_PARENTHESIS": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "(",
          "value": "（"
        },
        "LEFT_SINGLE_QUOTATION_MARK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "“"
        },
        "LEFT_SQUARE_BRACKET": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "「"
        },
        "LESS_THAN_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＜"
        },
        "LOW_LINE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＿"
        },
        "NUMBER_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "#",
          "value": "＃"
        },
        "PERCENT_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "％"
        },
        "PLUS_SIGN": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "＋"
        },
        "QUESTION_MARK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "?",
          "value": "？"
        },
        "RIGHT_CURLY_BRACKET": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "｝"
        },
        "RIGHT_DOUBLE_QUOTATION_MARK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "”"
        },
        "RIGHT_PARENTHESIS": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": ")",
          "value": "）"
        },
        "RIGHT_SINGLE_QUOTATION_MARK": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "’"
        },
        "RIGHT_SQUARE_BRACKET": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "」"
        },
        "SEMICOLON": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "；"
        },
        "SLASH": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "／"
        },
        "SPACE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "",
          "value": "　"
        },
        "TILDE": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "~",
          "value": "〜"
        },
        "VERTICAL_BAR": {
          "after_space": false,
          "before_space": false,
          "invalid_chars": "|",
          "value": "｜"
        }
      }
    }
  }
  return JSON.stringify(body)
}